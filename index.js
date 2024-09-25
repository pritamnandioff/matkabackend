/** @format */

const express = require("express");
const app = express();
const port = 3000;

// Define a route on a specific path
app.get("/status", (req, res) => {
    res.send("Project is running");
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running http://localhost:${port}`);
});
