import dotenv from 'dotenv';
import path from 'path';
// Load .env from project root (parent of backend/)
dotenv.config({ path: path.join(__dirname, '../../.env') });
dotenv.config(); // fallback to local .env if it exists
import express from 'express';
import cors from 'cors';
import { getDb } from './db';
import { errorHandler } from './middleware/errorHandler';
import authRouter from './routes/auth';
import controlsRouter from './routes/controls';
import controlStatusRouter from './routes/controlStatus';
import evidenceRouter from './routes/evidence';
import chatRouter from './routes/chat';

const app = express();
const PORT = process.env.PORT || 3001;

// Initialize DB on startup
getDb();

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/controls', controlsRouter);
app.use('/api/control-status', controlStatusRouter);
app.use('/api/evidence', evidenceRouter);
app.use('/api/chat', chatRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`[server] Running on http://localhost:${PORT}`);
});
