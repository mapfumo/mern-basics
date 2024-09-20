// const express = require("express");
import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

app.get("/products", (req, res) => {});

// console.log(process.env.MONGO_URI);

app.listen(5000, () => {
  connectDB();
  console.log("Server is running at http://localhost:5000");
});

// 9UK2wlLzXu4hA3ac

// mongodb+srv://mapfumo:9UK2wlLzXu4hA3ac@cluster0.0yei5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
