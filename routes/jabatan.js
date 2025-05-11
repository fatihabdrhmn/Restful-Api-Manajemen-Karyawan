const express = require("express");
const router = express.Router();
const controller = require("../controllers/jabatanController");

router.get("/", controller.getAllJabatan);

module.exports = router;
