const express = require("express");
const router = express.Router();
const controller = require("../controllers/pegawaiController");

router.get("/", controller.getAllPegawai);
router.post("/", controller.tambahPegawai);
router.put("/:id", controller.updatePegawai);
router.delete("/:id", controller.hapusPegawai);

module.exports = router;
