/** @format */

const Settings = require("../models/settings");

exports.getSettings = async (req, res) => {
    try {
        const settings = await Settings.find();

        res.status(200).json({
            success: true,
            data: settings,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error",
            error: error.message,
        });
    }
};
