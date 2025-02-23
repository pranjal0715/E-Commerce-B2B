require("dotenv").config(); // Load environment variables at the top
const express = require("express");
const cors = require("cors");
const connectDB = require("./src/config/db"); // Database connection
const authRoutes = require("./src/routes/authRoutes"); // Import routes

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", authRoutes);

// Port setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
