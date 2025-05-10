const express = require("express");
const app = express();
const pegawaiRoutes = require("./routes/pegawai");
const gajiRoutes = require("./routes/gaji");

app.use(express.json());
app.use("/pegawai", pegawaiRoutes);
app.use("/gaji", gajiRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
});
