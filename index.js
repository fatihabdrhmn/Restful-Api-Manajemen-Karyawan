const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const pegawaiRoutes = require("./routes/pegawai");
const gajiRoutes = require("./routes/gaji");
const jabatanRoutes = require("./routes/jabatan");
const departemenRoutes = require("./routes/departemen");
const adminsRoutes = require("./routes/admin");

app.use(express.json());

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Manajemen Karyawan API",
      version: "1.0.0",
      description: "API untuk mengelola data pegawai, jabatan, dan departemen",
    },
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
    servers: [
      {
        url: "https://master-polygon-457007-s6.as.r.appspot.com/",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routing
app.use("/pegawai", pegawaiRoutes);
app.use("/gaji", gajiRoutes);
app.use("/jabatan", jabatanRoutes);
app.use("/departemen", departemenRoutes);
app.use("/admin", adminsRoutes);

// Gunakan port dari environment App Engine
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server berjalan di http://localhost:${PORT}`);
});
