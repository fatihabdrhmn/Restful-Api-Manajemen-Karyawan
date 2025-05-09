const express = require("express");
const router = express.Router();
const controller = require("../controllers/pegawaiController");

router.get("/", controller.getAllPegawai);
router.post("/", controller.tambahPegawai);

module.exports = router;
