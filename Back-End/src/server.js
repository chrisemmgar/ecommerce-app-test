// const express = require("express");
// const cors = require("cors");
// const connectDB = require("./src/db.");
// const productRoutes = require("./routes/productRoutes");
// require("dotenv").config();

// const app = express();

// // Conexión a MongoDB
// connectDB();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Rutas
// app.use("/api", productRoutes);

// // Iniciar servidor
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// backend/src/server.js
import express from 'express';
import cors from 'cors';
import productRoutes from './routes/productRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

// Define ruta para productos
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
