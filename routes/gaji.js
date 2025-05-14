const express = require("express");
const router = express.Router();
const controller = require("../controllers/gajiController");
const { verifyToken } = require("../middleware/authentication");

router.get("/", controller.getAllGaji);

router.post("/", verifyToken, controller.addGaji);
router.put("/:id", verifyToken, controller.updateGaji);
router.delete("/:id", verifyToken, controller.deleteGaji);

module.exports = router;