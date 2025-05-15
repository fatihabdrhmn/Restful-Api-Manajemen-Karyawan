const db = require("../db");

exports.getAllGaji = (req, res) => {
  db.query("SELECT * FROM gaji_bulanan", (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.getAllDetailGaji = (req, res) => {
  const sql = `
    SELECT 
      g.id_gaji,
      p.nama_pegawai,
      g.jumlah_gaji,
      DATE_FORMAT(g.tanggal_gajian, '%Y-%m-%d') as tanggal_gajian,
      a.nama AS nama_admin
    FROM gaji_bulanan g
    JOIN pegawai p ON g.id_pegawai = p.id_pegawai
    JOIN admin a ON g.id_admin = a.id_admin
  `;
  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

exports.addGaji = (req, res) => {
  const { jumlah_gaji, tanggal_gajian, id_pegawai, id_admin } = req.body;
  const sql =
    "INSERT INTO gaji_bulanan (jumlah_gaji, tanggal_gajian, id_pegawai, id_admin) VALUES (?, ?, ?, ?)";
  db.query(
    sql,
    [jumlah_gaji, tanggal_gajian, id_pegawai, id_admin],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res
        .status(201)
        .json({ message: "Gaji berhasil ditambahkan", id: result.insertId });
    }
  );
};

exports.updateGaji = (req, res) => {
  const { id } = req.params;
  const { jumlah_gaji, tanggal_gajian, id_pegawai, id_admin } = req.body;
  const sql =
    "UPDATE gaji_bulanan SET jumlah_gaji=?, tanggal_gajian=?, id_pegawai=?, id_admin=? WHERE id_gaji=?";
  db.query(
    sql,
    [jumlah_gaji, tanggal_gajian, id_pegawai, id_admin, id],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: "Data gaji berhasil diperbarui" });
    }
  );
};

exports.deleteGaji = (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM gaji_bulanan WHERE id_gaji = ?", [id], (err) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: "Data gaji berhasil dihapus" });
  });
};

exports.getGajiById = (req, res) => {
  const { id } = req.params;
  db.query(
    "SELECT * FROM gaji_bulanan WHERE id_gaji = ?",
    [id],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      if (result.length === 0)
        return res.status(404).json({ message: "Data tidak ditemukan" });
      res.json(result[0]);
    }
  );
};
