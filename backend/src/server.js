import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/database.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

connectDB();

app.get("/", (req, res) => {
  res.json({
    message: "PurpleMerit API Server is running!",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
});
