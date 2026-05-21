import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import { Request } from 'express';
import { AuthRequest } from '../middleware/auth';

const UPLOAD_ROOT = path.join(__dirname, '../../uploads');

const ALLOWED_MIMES = new Set([
  'application/pdf',
  'image/png',
  'image/jpeg',
  'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'text/plain',
]);

export function getUploadDir(userId: number, criterionId: string): string {
  const dir = path.join(UPLOAD_ROOT, String(userId), criterionId);
  fs.mkdirSync(dir, { recursive: true });
  return dir;
}

export function getStoredFilePath(userId: number, criterionId: string, storedName: string): string {
  return path.join(UPLOAD_ROOT, String(userId), criterionId, storedName);
}

const storage = multer.diskStorage({
  destination: (req: Request, _file, cb) => {
    const authReq = req as AuthRequest;
    const userId = authReq.user?.id ?? 0;
    const criterionId = req.params.criterionId || 'unknown';
    try {
      const dir = getUploadDir(userId, criterionId);
      cb(null, dir);
    } catch (err) {
      cb(err as Error, '');
    }
  },
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase();
    cb(null, `${uuidv4()}${ext}`);
  },
});

export const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
  fileFilter: (_req, file, cb) => {
    if (ALLOWED_MIMES.has(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error(`File type not allowed: ${file.mimetype}`));
    }
  },
});
