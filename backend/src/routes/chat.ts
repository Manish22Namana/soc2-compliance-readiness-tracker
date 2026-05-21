import { Router, Response } from 'express';
import { requireAuth, AuthRequest } from '../middleware/auth';
import { getDb } from '../db';
import { streamChat } from '../services/anthropic';

const router = Router();

// POST /api/chat — send a message, stream the response
router.post('/', requireAuth, async (req: AuthRequest, res: Response) => {
  const { message } = req.body;
  if (!message || typeof message !== 'string' || message.trim().length === 0) {
    res.status(400).json({ error: 'message is required' });
    return;
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    res.status(503).json({ error: 'ANTHROPIC_API_KEY is not configured. Add it to your .env file and restart the backend.' });
    return;
  }

  const db = getDb();

  // Fetch last 20 messages for context
  const history = (
    db
      .prepare('SELECT role, content FROM chat_messages WHERE user_id = ? ORDER BY id DESC LIMIT 20')
      .all(req.user!.id) as Array<{ role: string; content: string }>
  ).reverse();

  // Fetch control statuses for AI context
  const statuses = db
    .prepare('SELECT criterion_id as criterionId, status, notes FROM user_control_status WHERE user_id = ?')
    .all(req.user!.id) as Array<{ criterionId: string; status: string; notes: string }>;

  const controlContext = statuses.map((s) => ({
    criterionId: s.criterionId,
    categoryCode: s.criterionId.replace(/\d.*/, ''), // e.g. "CC6.1" → "CC"... actually get first part
    status: s.status,
    notes: s.notes,
  }));

  // Persist user message
  db.prepare('INSERT INTO chat_messages (user_id, role, content) VALUES (?, ?, ?)').run(
    req.user!.id,
    'user',
    message.trim()
  );

  // Set up SSE
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders();

  const allMessages = [
    ...history,
    { role: 'user' as const, content: message.trim() },
  ] as Array<{ role: 'user' | 'assistant'; content: string }>;

  try {
    const fullResponse = await streamChat(allMessages, controlContext, (delta) => {
      res.write(`data: ${JSON.stringify({ delta })}\n\n`);
    });

    // Persist assistant response
    db.prepare('INSERT INTO chat_messages (user_id, role, content) VALUES (?, ?, ?)').run(
      req.user!.id,
      'assistant',
      fullResponse
    );

    res.write('data: [DONE]\n\n');
    res.end();
  } catch (err: any) {
    res.write(`data: ${JSON.stringify({ error: err.message || 'AI error' })}\n\n`);
    res.end();
  }
});

// GET /api/chat/history
router.get('/history', requireAuth, (req: AuthRequest, res: Response) => {
  const limit = Math.min(Number(req.query.limit) || 50, 200);
  const before = req.query.before ? Number(req.query.before) : null;

  const db = getDb();
  let rows;
  if (before) {
    rows = db
      .prepare('SELECT id, role, content, created_at as createdAt FROM chat_messages WHERE user_id = ? AND id < ? ORDER BY id DESC LIMIT ?')
      .all(req.user!.id, before, limit);
  } else {
    rows = db
      .prepare('SELECT id, role, content, created_at as createdAt FROM chat_messages WHERE user_id = ? ORDER BY id DESC LIMIT ?')
      .all(req.user!.id, limit);
  }
  res.json((rows as any[]).reverse());
});

// DELETE /api/chat/history
router.delete('/history', requireAuth, (req: AuthRequest, res: Response) => {
  const db = getDb();
  db.prepare('DELETE FROM chat_messages WHERE user_id = ?').run(req.user!.id);
  res.json({ success: true });
});

export default router;
