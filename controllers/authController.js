/** @format */

const User = require("../models/TestUser");
const Otp = require("../models/Otp");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { sendOtpToMobile } = require("../utils/sendOtp");

// Signup
exports.signup = async (req, res) => {
    const { user_name, mobile, mpin, fcm } = req.body;

    try {
        let user = await User.findOne({ mobile });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Create new user
        user = new User({
            user_name,
            mobile,
            mpin,
            fcm,
        });

        await user.save();

        // Generate OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const otpDoc = new Otp({ mobile, otp });
        await otpDoc.save();

        // Send OTP
        sendOtpToMobile(mobile, otp);

        res.json({ message: "Signup successful. OTP sent to mobile." });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Send OTP
exports.sendOtp = async (req, res) => {
    const { mobile } = req.body;

    try {
        // Generate OTP
        const otp = Math.floor(100000 + Math.random() * 900000).toString();
        const otpDoc = new Otp({ mobile, otp });
        await otpDoc.save();

        // Send OTP
        sendOtpToMobile(mobile, otp);

        res.json({ message: "OTP sent to mobile." });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Verify OTP
exports.verifyOtp = async (req, res) => {
    const { mobile, otp } = req.body;

    try {
        const otpDoc = await Otp.findOne({ mobile, otp });
        if (!otpDoc) {
            return res.status(400).json({ message: "Invalid OTP" });
        }

        const user = await User.findOne({ mobile });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        user.verified = true;
        await user.save();

        res.json({ message: "OTP verified successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// Login
exports.login = async (req, res) => {
    const { mobile, mpin, fcm } = req.body;

    try {
        const user = await User.findOne({ mobile });

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const mpinMatch = await bcrypt.compare(mpin, user.mpin);
        if (!mpinMatch) {
            return res.status(400).json({ message: "Invalid MPIN" });
        }

        // Update FCM token on login
        user.fcm = fcm;
        await user.save();

        // Generate JWT token
        const token = jwt.sign(
            { id: user._id, mobile: user.mobile },
            "your_jwt_secret_key",
            { expiresIn: "1h" }
        );

        res.json({ message: "Login successful", token, wallet: user.wallet });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};
