const express = require("express");
const app = express();
const pegawaiRoutes = require("./routes/pegawai");

app.use(express.json());
app.use("/pegawai", pegawaiRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
});
