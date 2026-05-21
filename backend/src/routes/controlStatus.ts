import { Router, Response } from 'express';
import { requireAuth, AuthRequest } from '../middleware/auth';
import { getDb } from '../db';

const router = Router();

// GET /api/control-status — all statuses for current user
router.get('/', requireAuth, (req: AuthRequest, res: Response) => {
  const db = getDb();
  const rows = db
    .prepare('SELECT criterion_id, status, notes, updated_at FROM user_control_status WHERE user_id = ?')
    .all(req.user!.id);
  res.json(rows);
});

// GET /api/control-status/:criterionId
router.get('/:criterionId', requireAuth, (req: AuthRequest, res: Response) => {
  const db = getDb();
  const row = db
    .prepare('SELECT criterion_id, status, notes, updated_at FROM user_control_status WHERE user_id = ? AND criterion_id = ?')
    .get(req.user!.id, req.params.criterionId);
  if (!row) {
    res.json({ criterion_id: req.params.criterionId, status: 'not_started', notes: '', updated_at: null });
    return;
  }
  res.json(row);
});

// PUT /api/control-status/:criterionId
router.put('/:criterionId', requireAuth, (req: AuthRequest, res: Response) => {
  const { status, notes } = req.body;
  const validStatuses = ['not_started', 'in_progress', 'complete', 'na'];
  if (status && !validStatuses.includes(status)) {
    res.status(400).json({ error: 'Invalid status value' });
    return;
  }

  const db = getDb();
  const existing = db
    .prepare('SELECT id, status, notes FROM user_control_status WHERE user_id = ? AND criterion_id = ?')
    .get(req.user!.id, req.params.criterionId) as any;

  if (existing) {
    const newStatus = status ?? existing.status;
    const newNotes = notes !== undefined ? notes : existing.notes;
    db.prepare(
      'UPDATE user_control_status SET status = ?, notes = ?, updated_at = datetime(\'now\') WHERE user_id = ? AND criterion_id = ?'
    ).run(newStatus, newNotes, req.user!.id, req.params.criterionId);
  } else {
    db.prepare(
      'INSERT INTO user_control_status (user_id, criterion_id, status, notes) VALUES (?, ?, ?, ?)'
    ).run(req.user!.id, req.params.criterionId, status || 'not_started', notes || '');
  }

  const updated = db
    .prepare('SELECT criterion_id, status, notes, updated_at FROM user_control_status WHERE user_id = ? AND criterion_id = ?')
    .get(req.user!.id, req.params.criterionId);
  res.json(updated);
});

export default router;
