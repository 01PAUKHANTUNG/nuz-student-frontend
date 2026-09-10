import * as SQLite from "expo-sqlite";

let db: SQLite.SQLiteDatabase | null = null;

export async function getDatabase(): Promise<SQLite.SQLiteDatabase> {
  if (db) {
    return db;
  }

  db = await SQLite.openDatabaseAsync("nuz_student.db");

  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS videos (
      id TEXT PRIMARY KEY NOT NULL,
      course TEXT NOT NULL,
      batch INTEGER NOT NULL,
      semester INTEGER NOT NULL,
      module TEXT NOT NULL,
      lesson INTEGER NOT NULL,
      title TEXT NOT NULL,
      videoUrl TEXT NOT NULL,
      localUri TEXT,
      downloaded INTEGER DEFAULT 0
    );
  `);

  return db;
}