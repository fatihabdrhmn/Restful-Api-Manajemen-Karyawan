const db = require("../db");

exports.getAllPegawai = (req, res) => {
  const sql = `
    SELECT 
      p.id_pegawai,
      p.nama_pegawai,
      p.email,
      p.no_telepon,
      DATE(p.tanggal_lahir) AS tanggal_lahir,
      p.alamat,
      p.jenis_kelamin,
      j.nama_jabatan,
      d.nama_departemen
    FROM Pegawai p
    JOIN Jabatan j ON p.id_jabatan = j.id_jabatan
    JOIN Departemen d ON p.id_departemen = d.id_departemen
  `;

  db.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};


exports.tambahPegawai = (req, res) => {
  const {
    nama_pegawai,
    email,
    no_telepon,
    tanggal_lahir,
    alamat,
    jenis_kelamin,
    id_jabatan,
    id_departemen,
  } = req.body;

  const sql = `
    INSERT INTO Pegawai 
    (nama_pegawai, email, no_telepon, tanggal_lahir, alamat, jenis_kelamin, id_jabatan, id_departemen) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      nama_pegawai,
      email,
      no_telepon,
      tanggal_lahir,
      alamat,
      jenis_kelamin,
      id_jabatan,
      id_departemen,
    ],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });
      res
        .status(201)
        .json({ message: "Pegawai berhasil ditambahkan", id: result.insertId });
    }
  );
};

exports.updatePegawai = (req, res) => {
  const { id } = req.params;
  const {
    nama_pegawai,
    email,
    no_telepon,
    tanggal_lahir,
    alamat,
    jenis_kelamin,
    id_jabatan,
    id_departemen
  } = req.body;

  const query = `
    UPDATE Pegawai SET
      nama_pegawai = ?, email = ?, no_telepon = ?, tanggal_lahir = ?,
      alamat = ?, jenis_kelamin = ?, id_jabatan = ?, id_departemen = ?
    WHERE id_pegawai = ?
  `;

  const values = [
    nama_pegawai, email, no_telepon, tanggal_lahir,
    alamat, jenis_kelamin, id_jabatan, id_departemen, id
  ];

  db.query(query, values, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Pegawai tidak ditemukan' });
    }
    res.json({ message: 'Data pegawai berhasil diupdate' });
  });
};

exports.hapusPegawai = (req, res) => {
  const { id } = req.params;

  const query = 'DELETE FROM Pegawai WHERE id_pegawai = ?';

  db.query(query, [id], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Pegawai tidak ditemukan' });
    }
    res.json({ message: 'Pegawai berhasil dihapus' });
  });
};
