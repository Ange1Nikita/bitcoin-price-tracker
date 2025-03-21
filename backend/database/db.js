const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./bitcoin.db');

db.run(`CREATE TABLE IF NOT EXISTS prices (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  date TEXT,
  price REAL
)`);

module.exports = db;