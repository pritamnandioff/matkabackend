/** @format */

const Market = require("../models/market");

// All Markets
exports.getAllMarkets = async (req, res) => {
    try {
        const markets = await Market.find();

        res.status(200).json({
            success: true,
            data: markets,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error",
            error: error.message,
        });
    }
};
