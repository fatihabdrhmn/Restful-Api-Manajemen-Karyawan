const express = require("express");
const router = express.Router();
const controller = require("../controllers/jabatanController");
const { verifyToken } = require("../middleware/authentication");

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
 *     tags: [Jabatan]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Daftar jabatan berhasil diambil
 *       401:
 *         description: Akses tanpa token atau token tidak valid
 */

/**
 * @swagger
 * /jabatan:
 *   post:
 *     summary: Tambah data jabatan baru
 *     tags: [Jabatan]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nama_jabatan
 *               - deskripsi_jabatan
 *             properties:
 *               nama_jabatan:
 *                 type: string
 *               deskripsi_jabatan:
 *                 type: string
 *     responses:
 *       201:
 *         description: Jabatan berhasil ditambahkan
 *       400:
 *         description: Input tidak valid
 *       401:
 *         description: Akses tanpa token atau token tidak valid
 */

/**
 * @swagger
 * /jabatan/{id}:
 *   put:
 *     summary: Update data jabatan berdasarkan ID
 *     tags: [Jabatan]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID jabatan yang akan diperbarui
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nama_jabatan
 *               - deskripsi_jabatan
 *             properties:
 *               nama_jabatan:
 *                 type: string
 *               deskripsi_jabatan:
 *                 type: string
 *     responses:
 *       200:
 *         description: Jabatan berhasil diperbarui
 *       400:
 *         description: Input tidak valid atau data tidak ditemukan
 *       401:
 *         description: Akses tanpa token atau token tidak valid
 *       404:
 *         description: Data jabatan tidak ditemukan
 */

/**
 * @swagger
 * /jabatan/{id}:
 *   delete:
 *     summary: Hapus data jabatan berdasarkan ID
 *     tags: [Jabatan]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID jabatan yang akan dihapus
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Jabatan berhasil dihapus
 *       401:
 *         description: Akses tanpa token atau token tidak valid
 *       404:
 *         description: Data jabatan tidak ditemukan
 */

// GET semua jabatan
router.get("/", verifyToken, controller.getAllJabatan);

// POST jabatan baru (butuh token)
router.post("/", verifyToken, controller.addJabatan);

// PUT update jabatan berdasarkan ID (butuh token)
router.put("/:id", verifyToken, controller.updateJabatan);

// DELETE jabatan berdasarkan ID (butuh token)
router.delete("/:id", verifyToken, controller.deleteJabatan);
module.exports = router;
