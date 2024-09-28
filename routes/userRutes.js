/** @format */

const express = require("express");
const router = express.Router();

const { getAllUsers, getUserByName } = require("../controllers/userController");

//All Users
router.get("/allUsers", getAllUsers);

// By user Name
router.get("/:user_name", getUserByName);

module.exports = router;
