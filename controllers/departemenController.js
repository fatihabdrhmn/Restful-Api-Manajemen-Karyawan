const db = require("../db");

exports.getAllDepartemen = (req, res) => {
  db.query("SELECT * FROM departemen", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.addDepartemen = (req, res) => {
  const { nama_departemen, deskripsi_departemen } = req.body;
  const sql =
    "INSERT INTO departemen (nama_departemen, deskripsi_departemen) VALUES (?, ?)";
  db.query(sql, [nama_departemen, deskripsi_departemen], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res
      .status(201)
      .json({
        message: "Departemen berhasil ditambahkan",
        id: result.insertId,
      });
  });
};

exports.updateDepartemen = (req, res) => {
  const { id } = req.params;
  const { nama_departemen, deskripsi_departemen } = req.body;
  const sql =
    "UPDATE departemen SET nama_departemen=?, deskripsi_departemen=? WHERE id_departemen=?";
  db.query(sql, [nama_departemen, deskripsi_departemen, id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Data depaartemen berhasil diperbarui" });
  });
};

exports.deleteDepartemen = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM departemen WHERE id_departemen = ?", [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Data departemen berhasil dihapus" });
  });
};
