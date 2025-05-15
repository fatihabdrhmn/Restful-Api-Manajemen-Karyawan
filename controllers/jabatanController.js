const db = require("../db");

exports.getAllJabatan = (req, res) => {
  db.query("SELECT * FROM Jabatan", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};


exports.addJabatan = (req, res) => {
  const { nama_jabatan, deskripsi_jabatan } = req.body;
  const sql = "INSERT INTO jabatan (nama_jabatan, deskripsi_jabatan) VALUES (?, ?)";
  db.query(
    sql, 
    [
    nama_jabatan, 
    deskripsi_jabatan], 
    (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "Jabatan berhasil ditambahkan", id: result.insertId });
  });
};

exports.updateJabatan = (req, res) => {
  const { id } = req.params;
  const { nama_jabatan, deskripsi_jabatan } = req.body;
  const sql = "UPDATE jabatan SET nama_jabatan=?, deskripsi_jabatan=? where id_jabatan=?";
  db.query(
    sql, 
    [
    nama_jabatan, 
    deskripsi_jabatan, 
    id], 
    (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Data Jabatan berhasil diperbarui" });
  });
};

exports.deleteJabatan = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM jabatan WHERE id_jabatan = ?", [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Data Jabatan berhasil dihapus" });
  });
};