const express = require("express");
const router = express.Router();
const controller = require("../controllers/adminController");

router.get("/", controller.getAllAdmin);
router.get("/:id", controller.getAdminById);
router.post("/", controller.addAdmin);
router.put("/:id", controller.updateAdmin);
router.delete("/:id", controller.deleteAdmin);
router.post("/login", controller.loginAdmin);

module.exports = router;