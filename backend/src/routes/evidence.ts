import { Router, Response } from 'express';
import fs from 'fs';
import { requireAuth, AuthRequest } from '../middleware/auth';
import { getDb } from '../db';
import { upload, getStoredFilePath } from '../services/fileStorage';

const router = Router();

// POST /api/evidence/:criterionId — upload files
router.post('/:criterionId', requireAuth, upload.array('files', 5), (req: AuthRequest, res: Response) => {
  const files = req.files as Express.Multer.File[];
  if (!files || files.length === 0) {
    res.status(400).json({ error: 'No files uploaded' });
    return;
  }

  const db = getDb();
  const inserted: any[] = [];

  for (const file of files) {
    const result = db
      .prepare(
        'INSERT INTO evidence (user_id, criterion_id, original_name, stored_name, mime_type, size_bytes) VALUES (?, ?, ?, ?, ?, ?)'
      )
      .run(req.user!.id, req.params.criterionId, file.originalname, file.filename, file.mimetype, file.size);

    inserted.push({
      id: result.lastInsertRowid,
      criterionId: req.params.criterionId,
      originalName: file.originalname,
      mimeType: file.mimetype,
      sizeBytes: file.size,
      uploadedAt: new Date().toISOString(),
    });
  }

  res.status(201).json(inserted);
});

// GET /api/evidence/:criterionId — list evidence for a criterion
router.get('/:criterionId', requireAuth, (req: AuthRequest, res: Response) => {
  const db = getDb();
  const rows = db
    .prepare(
      'SELECT id, criterion_id as criterionId, original_name as originalName, mime_type as mimeType, size_bytes as sizeBytes, uploaded_at as uploadedAt FROM evidence WHERE user_id = ? AND criterion_id = ? ORDER BY uploaded_at DESC'
    )
    .all(req.user!.id, req.params.criterionId);
  res.json(rows);
});

// GET /api/evidence/download/:evidenceId — download a file
router.get('/download/:evidenceId', requireAuth, (req: AuthRequest, res: Response) => {
  const db = getDb();
  const row = db
    .prepare('SELECT * FROM evidence WHERE id = ? AND user_id = ?')
    .get(Number(req.params.evidenceId), req.user!.id) as any;

  if (!row) {
    res.status(404).json({ error: 'File not found' });
    return;
  }

  const filePath = getStoredFilePath(req.user!.id, row.criterion_id, row.stored_name);
  if (!fs.existsSync(filePath)) {
    res.status(404).json({ error: 'File not found on disk' });
    return;
  }

  res.setHeader('Content-Disposition', `attachment; filename="${row.original_name}"`);
  res.setHeader('Content-Type', row.mime_type);
  res.sendFile(filePath);
});

// DELETE /api/evidence/:evidenceId
router.delete('/:evidenceId', requireAuth, (req: AuthRequest, res: Response) => {
  const db = getDb();
  const row = db
    .prepare('SELECT * FROM evidence WHERE id = ? AND user_id = ?')
    .get(Number(req.params.evidenceId), req.user!.id) as any;

  if (!row) {
    res.status(404).json({ error: 'File not found' });
    return;
  }

  const filePath = getStoredFilePath(req.user!.id, row.criterion_id, row.stored_name);
  try {
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
  } catch {
    // If file doesn't exist on disk, still delete DB record
  }

  db.prepare('DELETE FROM evidence WHERE id = ?').run(row.id);
  res.json({ success: true });
});

export default router;
