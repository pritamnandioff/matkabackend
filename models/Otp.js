/** @format */

const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema({
    mobile: { type: String, required: true },
    otp: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, index: { expires: "5m" } }, // OTP expires after 5 minutes
});

module.exports = mongoose.model("Otp", otpSchema);
