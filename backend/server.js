// const express = require("express");
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // allows us to use JSON data in the req.body

// everything called with /api/products will be routed to the productRoutes in product.route.js
// "/api/products" is the base path for all routes
// "/apt/products" => "/" in productRoutes
app.use("/api/products", productRoutes);

// console.log(process.env.MONGO_URI);

app.listen(PORT, () => {
  connectDB();
  console.log("Server is running at http://localhost:" + PORT);
});
