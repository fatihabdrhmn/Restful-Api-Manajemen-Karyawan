const db = require("../db");

exports.getAllGaji = (req, res) => {
  db.query("SELECT * FROM gaji_bulanan", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.tambahGaji = (req, res) => {
  const { jumlah_gaji, tanggal_gaji, id_pegawai, id_admin } = req.body;
  const sql = "INSERT INTO gaji_bulanan (jumlah_gaji, tanggal_gaji, id_pegawai, id_admin) VALUES (?, ?, ?, ?)";
  db.query(
    sql, 
    [
    jumlah_gaji, 
    tanggal_gaji, 
    id_pegawai, 
    id_admin], 
    (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "Gaji berhasil ditambahkan", id: result.insertId });
  });
};


exports.updateGaji = (req, res) => {
  const { id } = req.params;
  const { jumlah_gaji, tanggal_gaji, id_pegawai, id_admin } = req.body;
  const sql = "UPDATE gaji_bulanan SET jumlah_gaji=?, tanggal_gaji=?, id_pegawai=?, id_admin=? WHERE id_gaji=?";
  db.query(
    sql, 
    [
    jumlah_gaji, 
    tanggal_gaji, 
    id_pegawai, 
    id_admin, 
    id], 
    (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Data gaji berhasil diperbarui" });
  });
};




exports.hapusGaji = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM gaji_bulanan WHERE id_gaji = ?", [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Data gaji berhasil dihapus" });
  });
};












exports.getGajiById = (req, res) => {
  const { id } = req.params;
  db.query("SELECT * FROM gaji_bulanan WHERE id_gaji = ?", [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.length === 0) return res.status(404).json({ message: "Data tidak ditemukan" });
    res.json(result[0]);
  });
};