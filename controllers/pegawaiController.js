const db = require("../db");

exports.getAllPegawai = (req, res) => {
  db.query("SELECT * FROM Pegawai", (err, results) => {
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
