# SOC2 Compliance Readiness Tracker

A full-stack web application for tracking SOC2 Type II compliance readiness — covering all **61 criteria**, **21 categories**, and **201+ points of focus** from the AICPA Trust Services Criteria (TSC) 2017.

Built with React 19, Node.js/Express, SQLite, and Claude AI for an in-app compliance consultant.

---

## Features

- **Readiness Dashboard** — Overall % score with per-category progress bars
- **Controls Catalog** — All 61 SOC2 criteria organized by category (CC1–CC9, A1, PI1, C1, P1–P8)
- **Points of Focus** — 201+ granular implementation checkpoints per criterion
- **Status Tracking** — Mark each criterion as `Complete`, `In Progress`, `Not Started`, or `N/A`
- **Notes** — Free-text notes per criterion for auditor context
- **Evidence Upload** — Attach files (policies, screenshots, configs) to each criterion
- **AI Consultant** — Streaming chat powered by Claude (claude-sonnet-4-6) that understands your current compliance posture and can answer SOC2 questions
- **Authentication** — JWT-based auth with bcrypt password hashing (register/login)

---

## Screenshots

### Dashboard — Readiness Overview
The dashboard shows your overall readiness score, per-status counts, and a clickable category grid with progress bars.

![Dashboard](frontend/src/assets/hero.png)

### Controls Catalog
Browse all criteria for a category. Cards show status icons and quick-navigate to the criterion detail view.

### Criterion Detail
Per-criterion view with the full list of points of focus, a status selector, notes textarea, and evidence file management.

### AI Compliance Consultant
Chat with an AI consultant that's aware of your current status across all 61 criteria. Ask questions like "What evidence do I need for CC6.1?" or "Which categories have the most gaps?".

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, Vite 8, TypeScript, Tailwind CSS 3 |
| State | TanStack Query (server state), Zustand (auth) |
| Routing | React Router v6 |
| Backend | Node.js, Express, TypeScript, tsx |
| Database | SQLite via better-sqlite3 (WAL mode, raw SQL) |
| AI | Anthropic SDK, claude-sonnet-4-6, SSE streaming |
| Auth | JSON Web Tokens (jsonwebtoken) + bcryptjs |
| File uploads | multer, disk storage |
| Monorepo | npm workspaces |

---

## Project Structure

```
ComplianceApp/
├── backend/
│   └── src/
│       ├── data/soc2Controls.ts   # Full SOC2 catalog (61 criteria, 201+ POFs)
│       ├── db.ts                  # SQLite connection + WAL setup
│       ├── migrations/            # SQL schema
│       ├── middleware/            # JWT auth, error handler
│       ├── routes/                # auth, controls, status, evidence, chat
│       └── services/
│           ├── anthropic.ts       # AI system prompt + SSE streaming
│           └── fileStorage.ts     # multer + UUID file naming
├── frontend/
│   └── src/
│       ├── pages/                 # Dashboard, Controls, CriterionDetail, Chat, Auth
│       ├── components/            # Auth forms, Chat UI, Controls, Layout
│       ├── hooks/                 # useControls, useControlStatus, useEvidence
│       ├── store/                 # Zustand auth store (persisted to localStorage)
│       └── lib/api.ts             # Axios client + JWT interceptor
├── .env.example                   # Environment variable template
└── package.json                   # npm workspace root
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- An [Anthropic API key](https://console.anthropic.com/)

### 1. Clone & install

```bash
git clone https://github.com/Manish22Namana/soc2-compliance-readiness-tracker.git
cd soc2-compliance-readiness-tracker
npm install
```

### 2. Configure environment

```bash
cp .env.example .env
```

Edit `.env` and fill in your values:

```env
PORT=3001
JWT_SECRET=your-long-random-secret-here
ANTHROPIC_API_KEY=sk-ant-...
DB_PATH=./compliance.db
```

> **Security note:** Never commit `.env`. The `.gitignore` already excludes it.  
> Generate a strong JWT secret: `openssl rand -base64 48`

### 3. Start development servers

**Option A — run both together (from root):**
```bash
npm run dev
```

**Option B — run separately:**

Terminal 1 (backend):
```bash
cd backend
npx tsx watch src/index.ts
```

Terminal 2 (frontend):
```bash
cd frontend
npx vite
```

The app will be available at **http://localhost:5173** (backend on :3001).

### 4. Register an account

Navigate to http://localhost:5173/register and create your user. All compliance data is scoped per user.

---

## Database Schema

Four tables, created automatically on first run:

| Table | Purpose |
|---|---|
| `users` | Auth — email, bcrypt password hash, name |
| `user_control_status` | Per-user status + notes for each criterion |
| `evidence` | Metadata for uploaded files (stored in `backend/uploads/`) |
| `chat_messages` | Chat history per user |

---

## Environment Variables Reference

| Variable | Required | Description |
|---|---|---|
| `ANTHROPIC_API_KEY` | Yes | Anthropic API key for the AI consultant |
| `JWT_SECRET` | Yes | Secret for signing JWTs — use a long random string in production |
| `PORT` | No | Backend port (default: `3001`) |
| `DB_PATH` | No | Path to SQLite database file (default: `./compliance.db`) |

---

## Roadmap (V2)

- [ ] GitHub/Bitbucket code scanner — detect missing security controls in your codebase
- [ ] Risk Register — likelihood × impact matrix linked to criteria
- [ ] Change Management — change requests with linked criteria

---

## License

MIT
