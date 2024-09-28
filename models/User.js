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
    house_no: { type: String, default: "-" },
    address_lane_1: { type: String, default: "-" },
    address_lane_2: { type: String, default: "-" },
    area: { type: String, default: "-" },
    pin_code: { type: String, default: "-" },
    state_id: { type: String, default: "-" },
    district_id: { type: String, default: "-" },
    branch_name: { type: String, default: "-" },
    bank_name: { type: String, default: "-" },
    upi_number: { type: String, default: "-" },
    upi_id: { type: String, default: "-" },
    betting: { type: Boolean, default: false },
    transfer: { type: Boolean, default: false },
    fcm: { type: String },
    personal_notification: { type: Boolean, default: false },
    main_notification: { type: Boolean, default: false },
    galidisawar_notification: { type: Boolean, default: false },
    bets: [{ type: mongoose.Schema.Types.Mixed }],
    transaction: [{ type: mongoose.Schema.Types.Mixed }],
    notification: [{ type: mongoose.Schema.Types.Mixed }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
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

module.exports = mongoose.model("User", userSchema);
