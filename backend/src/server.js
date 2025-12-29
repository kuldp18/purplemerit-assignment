import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/database.config.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

app.use("/api/v1/auth", authRoutes);

app.get("/api/v1/health", (req, res) => {
  res.status(200).json({
    message: "PurpleMerit API Server is running!",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}!`);
});
