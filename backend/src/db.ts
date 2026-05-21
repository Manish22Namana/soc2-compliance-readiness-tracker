import Database from 'better-sqlite3';
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.join(__dirname, '../../.env') });
dotenv.config();

// Resolve DB_PATH relative to backend directory so the db file lands in the right place
const DB_PATH = process.env.DB_PATH
  ? path.resolve(__dirname, '../..', process.env.DB_PATH)
  : path.join(__dirname, '../../compliance.db');

let db: Database.Database;

export function getDb(): Database.Database {
  if (!db) {
    db = new Database(DB_PATH);
    db.pragma('journal_mode = WAL');
    db.pragma('foreign_keys = ON');
    runMigrations(db);
  }
  return db;
}

function runMigrations(database: Database.Database): void {
  const migrationDir = path.join(__dirname, 'migrations');
  const migrationFiles = fs.readdirSync(migrationDir).sort();

  database.exec(`
    CREATE TABLE IF NOT EXISTS _migrations (
      name TEXT PRIMARY KEY,
      applied_at TEXT NOT NULL DEFAULT (datetime('now'))
    )
  `);

  const applied = new Set(
    database.prepare('SELECT name FROM _migrations').all().map((r: any) => r.name)
  );

  for (const file of migrationFiles) {
    if (!file.endsWith('.sql') || applied.has(file)) continue;
    const sql = fs.readFileSync(path.join(migrationDir, file), 'utf-8');
    database.exec(sql);
    database.prepare('INSERT INTO _migrations (name) VALUES (?)').run(file);
    console.log(`[db] Applied migration: ${file}`);
  }
}
