const db = require("../db");

exports.getAllJabatan = (req, res) => {
  db.query("SELECT * FROM Jabatan", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};
