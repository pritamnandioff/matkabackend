/** @format */

const express = require("express");
const router = express.Router();
const {
    signup,
    login,
    sendOtp,
    verifyOtp,
} = require("../controllers/authController");
const { getAllUsers } = require("../controllers/userController");

// Signup route
router.post("/signup", signup);

// Login route
router.post("/login", login);

// Send OTP route
router.post("/send-otp", sendOtp);

// Verify OTP route
router.post("/verify-otp", verifyOtp);

module.exports = router;
