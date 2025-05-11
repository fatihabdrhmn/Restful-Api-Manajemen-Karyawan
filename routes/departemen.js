const express = require("express");
const router = express.Router();
const controller = require("../controllers/departemenController");

router.get("/", controller.getAllDepartemen);

module.exports = router;
