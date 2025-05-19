const express = require("express");
const router = express.Router();
const controller = require("../controllers/pegawaiController");
const { verifyToken } = require("../middleware/authentication");

/**
 * @swagger
 * tags:
 *   name: Pegawai
 *   description: Manajemen data pegawai
 */

/**
 * @swagger
 * /pegawai:
 *   get:
 *     summary: Ambil semua data pegawai
 *     tags: [Pegawai]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Daftar pegawai berhasil diambil
 *       500:
 *         description: Terjadi kesalahan pada server
 */

/**
 * @swagger
 * /pegawai:
 *   post:
 *     summary: Tambah data pegawai baru
 *     tags: [Pegawai]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nama_pegawai
 *               - email
 *               - id_jabatan
 *               - id_departemen
 *             properties:
 *               nama_pegawai:
 *                 type: string
 *               email:
 *                 type: string
 *               no_telepon:
 *                 type: string
 *               tanggal_lahir:
 *                 type: string
 *                 format: date
 *               alamat:
 *                 type: string
 *               jenis_kelamin:
 *                 type: string
 *                 enum: [Laki-laki, Perempuan]
 *               id_jabatan:
 *                 type: integer
 *               id_departemen:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Pegawai berhasil ditambahkan
 *       400:
 *         description: Input tidak valid
 *       401:
 *         description: Akses tanpa token atau token tidak valid
 *       500:
 *         description: Terjadi kesalahan pada server
 */

/**
 * @swagger
 * /pegawai/{id}:
 *   put:
 *     summary: Update data pegawai berdasarkan ID
 *     tags: [Pegawai]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID pegawai yang akan diperbarui
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nama_pegawai:
 *                 type: string
 *               email:
 *                 type: string
 *               no_telepon:
 *                 type: string
 *               tanggal_lahir:
 *                 type: string
 *                 format: date
 *               alamat:
 *                 type: string
 *               jenis_kelamin:
 *                 type: string
 *                 enum: [Laki-laki, Perempuan]
 *               id_jabatan:
 *                 type: integer
 *               id_departemen:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Data pegawai berhasil diperbarui
 *       400:
 *         description: Input tidak valid atau data tidak ditemukan
 *       401:
 *         description: Akses tanpa token atau token tidak valid
 *       404:
 *         description: Data pegawai tidak ditemukan
 *       500:
 *         description: Terjadi kesalahan pada server
 */

/**
 * @swagger
 * /pegawai/{id}:
 *   delete:
 *     summary: Hapus data pegawai berdasarkan ID
 *     tags: [Pegawai]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID pegawai yang akan dihapus
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Pegawai berhasil dihapus
 *       401:
 *         description: Akses tanpa token atau token tidak valid
 *       404:
 *         description: Data pegawai tidak ditemukan
 *       500:
 *         description: Terjadi kesalahan pada server
 */

// Ambil semua data pegawai
router.get("/", verifyToken, controller.getAllPegawai);

// Tambah pegawai baru (butuh token)
router.post("/", verifyToken, controller.tambahPegawai);

// Update data pegawai berdasarkan ID (butuh token)
router.put("/:id", verifyToken, controller.updatePegawai);

// Hapus data pegawai berdasarkan ID (butuh token)
router.delete("/:id", verifyToken, controller.hapusPegawai);

module.exports = router;
