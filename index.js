/** @format */

const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRutes");
const marketRoutes = require("./routes/marketRoutes");
const settingsRoutes = require("./routes/settingsRoute");
const { connectDB } = require("./config/db");
const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/market", marketRoutes);
app.use("/api/getSettings", settingsRoutes);

// Error handling middleware (optional)
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
});
