const express = require("express");
const router = express.Router();

const { getSummary } = require("../controllers/summaryController");

// 📊 Finance summary route
router.get("/", getSummary);

module.exports = router;