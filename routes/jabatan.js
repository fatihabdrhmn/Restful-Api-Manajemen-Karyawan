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
 *     responses:
 *       200:
 *         description: Daftar jabatan berhasil diambil
 */
router.get("/", controller.getAllJabatan);
/**
 * @swagger
 * /jabatan:
 *   post:
 *     summary: Tambah data jabatan baru
 *     tags: [Jabatan]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nama_jabatan:
 *                 type: string
 *               deskripsi_jabatan:
 *                 type: string
 *     responses:
 *       201:
 *         description: Jabatan berhasil ditambahkan
 */

router.post("/", verifyToken, controller.addJabatan);

/**
 * @swagger
 * /departemen/{id}:
 *   put:
 *     summary: Update data jabatan berdasarkan ID
 *     tags: [Jabatan]
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
 *             properties:
 *               nama_jabatan:
 *                 type: string
 *               deskripsi_jabatan:
 *                 type: string
 */
router.put("/:id", verifyToken, controller.updateJabatan);

/**
 * @swagger
 * /departemen/{id}:
 *   delete:
 *     summary: Hapus data jabatan berdasarkan ID
 *     tags: [Jabatan]
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
 */
router.delete("/:id", verifyToken, controller.deleteJabatan);



module.exports = router;
