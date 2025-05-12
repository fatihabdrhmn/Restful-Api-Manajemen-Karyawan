const express = require("express");
const app = express();
const pegawaiRoutes = require("./routes/pegawai");
const gajiRoutes = require("./routes/gaji");
const jabatanRoutes = require("./routes/jabatan");
const departemenRoutes = require("./routes/departemen");
const adminsRoutes = require("./routes/admin");

app.use(express.json());
app.use("/pegawai", pegawaiRoutes);
app.use("/gaji", gajiRoutes);
app.use("/jabatan", jabatanRoutes);
app.use("/departemen", departemenRoutes);
app.use("/admin" ,adminsRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
});
