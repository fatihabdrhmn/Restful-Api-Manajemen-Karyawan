const express = require("express");
const router = express.Router();
const controller = require("../controllers/adminController");
const { verifyToken } = require("../middleware/authentication");

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
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Daftar admin berhasil diambil
 */

/**
 * @swagger
 * /admin/{id}:
 *   get:
 *     summary: Ambil data admin berdasarkan ID
 *     tags: [Admin]
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
 *         description: Data admin ditemukan
 *       400:
 *         description: Admin tidak ditemukan
 */

/**
 * @swagger
 * /admin:
 *   post:
 *     summary: Tambah admin baru
 *     tags: [Admin]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nama
 *               - username
 *               - password
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
 *       400:
 *         description: Data yang dikirim tidak lengkap
 *       401:
 *         description: Token tidak valid
 */

/**
 * @swagger
 * /admin/{id}:
 *   put:
 *     summary: Perbarui data admin
 *     tags: [Admin]
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
 *               nama:
 *                 type: string
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Data admin berhasil diperbarui
 *       400:
 *         description: Permintaan salah
 *       401:
 *         description: Token tidak valid
 *       404:
 *         description: Admin tidak ditemukan
 */

/**
 * @swagger
 * /admin/{id}:
 *   delete:
 *     summary: Hapus admin berdasarkan ID
 *     tags: [Admin]
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
 *         description: Admin berhasil dihapus
 *       400:
 *         description: Permintaan salah
 *       401:
 *         description: Token tidak valid
 *       404:
 *         description: Admin tidak ditemukan
 */

/**
 * @swagger
 * /admin/login:
 *   post:
 *     summary: Login admin dan dapatkan token
 *     tags: [Admin]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login berhasil dan token dikembalikan
 *       400:
 *         description: Permintaan salah
 *       401:
 *         description: Login gagal, username atau password salah
 */

// --- PUBLIC ---
router.get("/", verifyToken, controller.getAllAdmin);
router.get("/:id", verifyToken, controller.getAdminById);
router.post("/login", verifyToken, controller.loginAdmin);

// --- PROTECTED ---
router.post("/", verifyToken, controller.addAdmin);
router.put("/:id", verifyToken, controller.updateAdmin);
router.delete("/:id", verifyToken, controller.deleteAdmin);

module.exports = router;
