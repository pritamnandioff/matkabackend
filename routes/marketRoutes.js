/** @format */

const express = require("express");
const router = express.Router();

const { getAllMarkets } = require("../controllers/marketController");

router.get("/allMarkets", getAllMarkets);

module.exports = router;
