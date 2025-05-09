// db.js
const mysql = require("mysql2");

const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "manajemen_karyawan",
});

conn.connect((err) => {
  if (err) throw err;
  console.log("✅ Terhubung ke database MySQL");
});

module.exports = conn;
