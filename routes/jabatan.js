const express = require("express");
const router = express.Router();
const controller = require("../controllers/jabatanController");

/**
 * @swagger
 * tags:
 *   name: Jabatan
 *   description: Manajemen data jabatan
 */


/**
 * @swagger
 * /jabatan:
 *   get:
 *     summary: Ambil semua data jabatan
 *     tags: [jabatan]
 *     responses:
 *       200:
 *         description: Daftar jabatan berhasil diambil
 */
router.get("/", controller.getAllJabatan);

module.exports = router;
