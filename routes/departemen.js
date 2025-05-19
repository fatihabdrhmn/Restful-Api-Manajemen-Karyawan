const express = require("express");
const router = express.Router();
const controller = require("../controllers/departemenController");
const { verifyToken } = require("../middleware/authentication");

/**
 * @swagger
 * tags:
 *   name: Departemen
 *   description: Manajemen data departemen
 */

/**
 * @swagger
 * /departemen:
 *   get:
 *     summary: Ambil semua data departemen
 *     tags: [Departemen]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Daftar departemen berhasil diambil
 *       500:
 *         description: Terjadi kesalahan saat mengambil data dari database
 */

/**
 * @swagger
 * /departemen:
 *   post:
 *     summary: Tambah data departemen baru
 *     tags: [Departemen]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nama_departemen
 *               - deskripsi_departemen
 *             properties:
 *               nama_departemen:
 *                 type: string
 *               deskripsi_departemen:
 *                 type: string
 *     responses:
 *       201:
 *         description: Departemen berhasil ditambahkan
 *       400:
 *         description: Data tidak lengkap atau format salah
 *       401:
 *         description: Token tidak valid atau tidak tersedia
 *       500:
 *         description: Terjadi kesalahan saat menambahkan data
 */

/**
 * @swagger
 * /departemen/{id}:
 *   put:
 *     summary: Perbarui data departemen berdasarkan ID
 *     tags: [Departemen]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID departemen yang akan diperbarui
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nama_departemen
 *               - deskripsi_departemen
 *             properties:
 *               nama_departemen:
 *                 type: string
 *               deskripsi_departemen:
 *                 type: string
 *     responses:
 *       200:
 *         description: Data departemen berhasil diperbarui
 *       400:
 *         description: Permintaan tidak valid
 *       401:
 *         description: Token tidak valid
 *       404:
 *         description: Departemen tidak ditemukan
 *       500:
 *         description: Terjadi kesalahan saat memperbarui data
 */

/**
 * @swagger
 * /departemen/{id}:
 *   delete:
 *     summary: Hapus data departemen berdasarkan ID
 *     tags: [Departemen]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID departemen yang akan dihapus
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Data departemen berhasil dihapus
 *       400:
 *         description: Permintaan tidak valid
 *       401:
 *         description: Token tidak valid
 *       404:
 *         description: Departemen tidak ditemukan
 *       500:
 *         description: Terjadi kesalahan saat menghapus data
 */

// Ambil semua departemen
router.get("/", verifyToken, controller.getAllDepartemen);

// Tambah departemen baru (dengan verifikasi token)
router.post("/", verifyToken, controller.addDepartemen);

// Perbarui departemen berdasarkan ID (dengan verifikasi token)
router.put("/:id", verifyToken, controller.updateDepartemen);

// Hapus departemen berdasarkan ID (dengan verifikasi token)
router.delete("/:id", verifyToken, controller.deleteDepartemen);

module.exports = router;
