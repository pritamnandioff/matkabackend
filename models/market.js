/** @format */

const mongoose = require("mongoose");

const MarketSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    name_hindi: {
        type: String,
    },
    open_time: {
        type: String,
        required: true,
    },
    close_time: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        default: false,
    },
    open_digit: {
        type: String,
        default: "-",
    },
    close_digit: {
        type: String,
        default: "-",
    },
    open_panna: {
        type: String,
        default: "-",
    },
    close_panna: {
        type: String,
        default: "-",
    },
    tag: {
        type: String,
        default: "main",
    },
    market_status: {
        type: Boolean,
        default: true,
    },
    market_off_day: {
        monday: { type: Boolean, default: true },
        tuesday: { type: Boolean, default: true },
        wednesday: { type: Boolean, default: true },
        thursday: { type: Boolean, default: true },
        friday: { type: Boolean, default: true },
        saturday: { type: Boolean, default: true },
        sunday: { type: Boolean, default: true },
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

// Middleware to update the `updatedAt` field on save
MarketSchema.pre("save", function (next) {
    this.updatedAt = Date.now();
    next();
});

module.exports = mongoose.model("Market", MarketSchema);
