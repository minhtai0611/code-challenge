import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export async function connectToDatabase() {
    const db = await open({
        filename: './database/database.sqlite',
        driver: sqlite3.Database,
    });

    // Create the resources table if it doesn't exist
    await db.exec(`
        CREATE TABLE IF NOT EXISTS resources (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            description TEXT,
            createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
            updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `);

    console.log('Connected to the database');
    return db;
}