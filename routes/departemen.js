const express = require("express");
const router = express.Router();
const controller = require("../controllers/departemenController");

/**
 * @swagger
 * tags:
 *   name: departemen
 *   description: Manajemen data departemen
 */


/**
 * @swagger
 * /departemen:
 *   get:
 *     summary: Ambil semua data departemen
 *     tags: [departemen]
 *     responses:
 *       200:
 *         description: Daftar departemen berhasil diambil
 */
router.get("/", controller.getAllDepartemen);

module.exports = router;
