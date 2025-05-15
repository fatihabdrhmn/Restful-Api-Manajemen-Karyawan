const express = require("express");
const router = express.Router();
const controller = require("../controllers/adminController");

/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: Manajemen data admin
 */

/**
 * @swagger
 * /admin:
 *   get:
 *     summary: Ambil semua data admin
 *     tags: [Admin]
 *     responses:
 *       200:
 *         description: Daftar admin berhasil diambil
 */
router.get("/", controller.getAllAdmin);

/**
 * @swagger
 * /admin/{id}:
 *   get:
 *     summary: Ambil data admin berdasarkan ID
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID admin yang dicari
 *     responses:
 *       200:
 *         description: Data admin ditemukan
 *       404:
 *         description: Admin tidak ditemukan
 */
router.get("/:id", controller.getAdminById);

/**
 * @swagger
 * /admin:
 *   post:
 *     summary: Tambahkan admin baru
 *     tags: [Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nama:
 *                 type: string
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Admin berhasil ditambahkan
 */
router.post("/", controller.addAdmin);

/**
 * @swagger
 * /admin/{id}:
 *   put:
 *     summary: Update data admin berdasarkan ID
 *     tags: [Admin]
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
 *               nama:
 *                 type: string
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Data admin berhasil diupdate
 */
router.put("/:id", controller.updateAdmin);

/**
 * @swagger
 * /admin/{id}:
 *   delete:
 *     summary: Hapus admin berdasarkan ID
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Admin berhasil dihapus
 */
router.delete("/:id", controller.deleteAdmin);

/**
 * @swagger
 * /admin/{id}:
 *   delete:
 *     summary: Hapus admin berdasarkan ID
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Admin berhasil dihapus
 */
router.post("/login", controller.loginAdmin);

module.exports = router;