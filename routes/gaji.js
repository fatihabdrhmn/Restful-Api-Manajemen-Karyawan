const express = require("express");
const router = express.Router();
const controller = require("../controllers/gajiController");
const { verifyToken } = require("../middleware/authentication");

/**
 * @swagger
 * /gaji:
 *   get:
 *     summary: Ambil semua data gaji
 *     tags: [Gaji]
 *      security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Berhasil mengambil semua data gaji
 *       401:
 *         description: Akses tanpa token atau token kadaluarsa
 *       404:
 *         description: Endpoint tidak ditemukan
 */

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
 *       400:
 *         description: Permintaan salah (input tidak valid atau data tidak ditemukan)
 *       401:
 *         description: Akses tanpa token atau token kadaluarsa
 */

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
 *       400:
 *         description: Permintaan salah (input tidak valid atau data tidak ditemukan)
 *       401:
 *         description: Akses tanpa token atau token kadaluarsa
 *       404:
 *         description: Data gaji tidak ditemukan
 */

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
 *       401:
 *         description: Akses tanpa token atau token kadaluarsa
 *       404:
 *         description: Data gaji tidak ditemukan
 */

/**
 * @swagger
 * /gaji/{id}:
 *   get:
 *     summary: Ambil data gaji berdasarkan ID
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
 *         description: Data gaji ditemukan
 *       404:
 *         description: Data gaji tidak ditemukan
 */

/**
 * @swagger
 * /gaji/gaji:
 *   get:
 *     summary: Ambil semua data gaji detail (dengan nama pegawai dan admin)
 *     tags: [Gaji]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Berhasil mengambil data detail gaji
 *       401:
 *         description: Akses tanpa token atau token kadaluarsa
 *       404:
 *         description: Endpoint tidak ditemukan
 */

// GET semua data gaji
router.get("/", verifyToken, controller.getAllGaji);

// GET detail data gaji (misalnya join dengan pegawai & admin)
router.get("/gaji", verifyToken, controller.getAllDetailGaji);

// GET data gaji berdasarkan ID
router.get("/:id", verifyToken, controller.getGajiById);

// POST data gaji (dengan token)
router.post("/", verifyToken, controller.addGaji);

// PUT update data gaji berdasarkan ID (dengan token)
router.put("/:id", verifyToken, controller.updateGaji);

// DELETE data gaji berdasarkan ID (dengan token)
router.delete("/:id", verifyToken, controller.deleteGaji);
module.exports = router;
