// db.js
const mysql = require("mysql2");

const connection = mysql.createConnection({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  socketPath: "/cloudsql/master-polygon-457007-s6:us-central1:dbfatih-01",
});

module.exports = connection;

connection.connect((err) => {
  if (err) throw err;
  console.log("✅ Terhubung ke database MySQL CLOUD");
});

module.exports = connection;
