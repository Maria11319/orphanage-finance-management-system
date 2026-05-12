const express = require("express");

const {
  addExpense,
  getExpenses,
  deleteExpense,
  updateExpense,
} = require("../controllers/expenseController");

const router = express.Router();

// GET all expenses
router.get("/", getExpenses);

// POST new expense
router.post("/", addExpense);

// DELETE expense
router.delete("/:id", deleteExpense);

// UPDATE expense
router.put("/:id", updateExpense);

module.exports = router;