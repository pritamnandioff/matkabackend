/** @format */

const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(
            `mongodb+srv://tom1:AA4WSsqK1ge1gGFe@cluster0.ydvycn3.mongodb.net/game`
        );
        console.log(`MongoDB Connection : ${mongoose.connection.host}`);
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);
    }
};

module.exports = { connectDB };
