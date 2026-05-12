const express = require("express");
const router = express.Router();

const {
  addIncome,
  getIncome,
} = require("../controllers/incomeController");

// ➕ Add income
router.post("/", addIncome);

// 📥 Get income
router.get("/", getIncome);

module.exports = router;