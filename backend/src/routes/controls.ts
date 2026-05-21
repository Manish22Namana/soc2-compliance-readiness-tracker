import { Router, Response } from 'express';
import { requireAuth, AuthRequest } from '../middleware/auth';
import { catalog } from '../data/soc2Controls';

const router = Router();

// GET /api/controls — full catalog
router.get('/', requireAuth, (_req: AuthRequest, res: Response) => {
  res.json(catalog);
});

// GET /api/controls/:categoryCode — single category
router.get('/:categoryCode', requireAuth, (req: AuthRequest, res: Response) => {
  const category = catalog.categories.find(
    (c) => c.code.toLowerCase() === req.params.categoryCode.toLowerCase()
  );
  if (!category) {
    res.status(404).json({ error: 'Category not found' });
    return;
  }
  res.json(category);
});

export default router;
