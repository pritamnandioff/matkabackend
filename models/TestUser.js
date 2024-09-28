/** @format */

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    user_name: { type: String, required: true },
    mpin: { type: String, required: true },
    mobile: { type: String, unique: true, required: true },
    wallet: { type: Number, default: 0 },
    verified: { type: Boolean, default: false },
    status: { type: Boolean, default: true },
    upi_number: { type: String, default: "-" },
    upi_id: { type: String, default: "-" },
    betting: { type: Boolean, default: false },
    transfer: { type: Boolean, default: false },
    fcm: { type: String },
    personal_notification: { type: Boolean, default: false },
    main_notification: { type: Boolean, default: false },
    galidisawar_notification: { type: Boolean, default: false },
    authentication: { type: Boolean, default: false },
});

// Hash MPIN before saving
userSchema.pre("save", async function (next) {
    if (this.isModified("mpin")) {
        const salt = await bcrypt.genSalt(10);
        this.mpin = await bcrypt.hash(this.mpin, salt);
    }
    next();
});

module.exports = mongoose.model("TestUser", userSchema);
