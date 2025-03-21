const db = require('../database/db');

exports.getPrices = (req, res) => {
  const { period } = req.query;

  let query = 'SELECT * FROM prices';
  if (period === 'day') {
    query += " WHERE date >= datetime('now', '-1 day')";
  } else if (period === 'week') {
    query += " WHERE date >= datetime('now', '-7 days')";
  } else if (period === 'month') {
    query += " WHERE date >= datetime('now', '-1 month')";
  } else if (period === 'year') {
    query += " WHERE date >= datetime('now', '-1 year')";
  }

  db.all(query, [], (err, rows) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.json(rows);
    }
  });
};