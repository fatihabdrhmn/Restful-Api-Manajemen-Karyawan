const express = require("express");
const router = express.Router();
const controller = require("../controllers/gajiController");

router.get("/", controller.getAllGaji);
router.post("/", controller.tambahGaji);
router.put("/:id", controller.updateGaji);
router.delete("/:id", controller.hapusGaji);

module.exports = router;