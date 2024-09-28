/** @format */

const mongoose = require("mongoose");

const betsSchema = new mongoose.Schema(
    {
        user_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "User",
        },
        game_mode: {
            type: String,
            required: true,
        },
        market_id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Market",
        },
        market_name: {
            type: String,
            required: true,
        },
        user_bal: {
            type: Number,
            required: true,
        },
        session: {
            type: String,
            required: true,
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
        win: {
            type: String,
            default: "-",
        },
        points: {
            type: Number,
            required: true,
        },
        result: {
            type: Array,
            default: [],
        },
        tag: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Bets", betsSchema);
