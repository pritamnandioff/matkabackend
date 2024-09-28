/** @format */

const User = require("../models/User"); // Adjust the path to your user model

// Fetch all users
exports.getAllUsers = async (req, res) => {
    try {
        // Query to fetch all users
        const users = await User.find();

        // Return the list of users as a JSON response
        res.status(200).json({
            success: true,
            data: users,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Server Error",
            error: error.message,
        });
    }
};

// Get user by user_name
exports.getUserByName = async (req, res) => {
    const { user_name } = req.params; // Extract user_name from the URL parameters

    try {
        // Query to find the user by user_name
        const user = await User.findOne({ user_name });

        // If user not found
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        // If user is found, send the user data
        res.status(200).json({
            success: true,
            data: user,
        });
    } catch (error) {
        // Handle server errors
        res.status(500).json({
            success: false,
            message: "Server Error",
            error: error.message,
        });
    }
};
