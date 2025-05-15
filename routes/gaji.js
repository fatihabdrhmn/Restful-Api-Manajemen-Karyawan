const express = require("express");
const router = express.Router();
const controller = require("../controllers/gajiController");
const { verifyToken } = require("../middleware/authentication");

/**
 * @swagger
 * tags:
 *   name: Gaji
 *   description: Manajemen data gaji bulanan pegawai
 */

/**
 * @swagger
 * /gaji:
 *   get:
 *     summary: Ambil semua data gaji
 *     tags: [Gaji]
 *     responses:
 *       200:
 *         description: Berhasil mengambil semua data gaji
 */
router.get("/", controller.getAllGaji);


/**
 * @swagger
 * /gaji:
 *   post:
 *     summary: Tambahkan data gaji baru
 *     tags: [Gaji]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - jumlah_gaji
 *               - tanggal_gajian
 *               - id_pegawai
 *               - id_admin
 *             properties:
 *               jumlah_gaji:
 *                 type: number
 *               tanggal_gajian:
 *                 type: string
 *                 format: date
 *               id_pegawai:
 *                 type: integer
 *               id_admin:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Gaji berhasil ditambahkan
 */
router.post("/", verifyToken, controller.addGaji);

/**
 * @swagger
 * /gaji/{id}:
 *   put:
 *     summary: Update data gaji berdasarkan ID
 *     tags: [Gaji]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               jumlah_gaji:
 *                 type: number
 *               tanggal_gajian:
 *                 type: string
 *                 format: date
 *               id_pegawai:
 *                 type: integer
 *               id_admin:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Data gaji berhasil diperbarui
 */
router.put("/:id", verifyToken, controller.updateGaji);

/**
 * @swagger
 * /gaji/{id}:
 *   delete:
 *     summary: Hapus data gaji berdasarkan ID
 *     tags: [Gaji]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Data gaji berhasil dihapus
 */
router.delete("/:id", verifyToken, controller.deleteGaji);

module.exports = router;