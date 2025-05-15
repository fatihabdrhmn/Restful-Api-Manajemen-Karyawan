const express = require("express");
const router = express.Router();
const controller = require("../controllers/pegawaiController");
const { verifyToken } = require("../middleware/authentication");

/**
 * @swagger
 * /pegawai:
 *   get:
 *     summary: Mendapatkan semua data pegawai
 *     responses:
 *       200:
 *         description: Berhasil mengambil data pegawai
 *   post:
 *     summary: Menambahkan pegawai baru
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
 */
router.get("/", controller.getAllPegawai);
router.post("/", verifyToken, controller.tambahPegawai);



/**
 * @swagger
 * /pegawai/{id}:
 *   put:
 *     summary: Update data pegawai berdasarkan ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID pegawai yang ingin diupdate
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
 *         description: Data pegawai berhasil diupdate
 *       404:
 *         description: Pegawai tidak ditemukan
 *   delete:
 *     summary: Hapus data pegawai berdasarkan ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Berhasil menghapus data pegawai
 */
router.put("/:id", verifyToken, controller.updatePegawai);
router.delete("/:id", verifyToken, controller.hapusPegawai);

module.exports = router;
