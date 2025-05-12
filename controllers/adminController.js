const db = require("../db");


exports.getAllAdmin = (req, res) => {
  db.query("SELECT id_admin, nama, username FROM admin", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};


exports.getAdminById = (req, res) => {
  const { id } = req.params;
  db.query("SELECT id_admin, nama, username FROM admin WHERE id_admin = ?", [id], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0) return res.status(404).json({ message: "Admin tidak ditemukan" });
    res.json(results[0]);
  });
};


exports.addAdmin = (req, res) => {
  const { nama, username, password } = req.body;
  const sql = "INSERT INTO admin (nama, username, password) VALUES (?, ?, ?)";
  db.query(
    sql, 
    [
    nama, 
    username, 
    password], 
    (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: "Admin berhasil ditambahkan", id: result.insertId });
  });
};


exports.updateAdmin = (req, res) => {
  const { id } = req.params;
  const { nama, username, password } = req.body;
  const sql = "UPDATE admin SET nama=?, username=?, password=? WHERE id_admin=?";
  db.query(sql, 
    [
    nama, 
    username, 
    password, 
    id], 
    (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Data admin diperbarui" });
  });
};


exports.deleteAdmin = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM admin WHERE id_admin = ?", [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Admin dihapus" });
  });
};


exports.loginAdmin = (req, res) => {
  const { username, password } = req.body;
  const sql = "SELECT * FROM admin WHERE username = ? AND password = ?";
  db.query(sql, [username, password], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    if (results.length === 0)
      return res.status(401).json({ message: "Login gagal, username atau password salah" });

    const admin = results[0];
    const token = generateToken(admin);

    res.json({
      message: "Login berhasil",
      token,
      admin: {
        id_admin: admin.id_admin,
        nama: admin.nama,
        username: admin.username
      }
    });
  });
};