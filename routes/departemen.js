const express = require("express");
const router = express.Router();
const controller = require("../controllers/departemenController");
const { verifyToken } = require("../middleware/authentication");

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

/**
 * @swagger
 * /departemen:
 *   post:
 *     summary: Tambah data departemen baru
 *     tags: [departemen]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nama_departemen:
 *                 type: string
 *               deskripsi_departemen:
 *                 type: string
 *     responses:
 *       201:
 *         description: Departemen berhasil ditambahkan
 */
router.post("/", verifyToken, controller.addDepartemen);

/**
 * @swagger
 * /departemen/{id}:
 *   put:
 *     summary: Update data departemen berdasarkan ID
 *     tags: [departemen]
 *     parameters:
 *       - name: id
 *         in: path
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
 *             properties:
 *               nama_departemen:
 *                 type: string
 *               deskripsi_departemen:
 *                 type: string
 */
router.put("/:id", verifyToken, controller.updateDepartemen);

/**
 * @swagger
 * /departemen/{id}:
 *   delete:
 *     summary: Hapus data departemen berdasarkan ID
 *     tags: [departemen]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID departemen yang akan dihapus
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Departemen berhasil dihapus
 */
router.delete("/:id", verifyToken, controller.deleteDepartemen);



module.exports = router;
