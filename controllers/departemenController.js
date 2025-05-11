const db = require("../db");

exports.getAllDepartemen = (req, res) => {
  db.query("SELECT * FROM Departemen", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};
