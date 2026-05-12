const Income = require("../models/Income");
const Expense = require("../models/Expense");

// 📊 Get Finance Summary
const getSummary = async (req, res) => {
  try {
    const incomes = await Income.find();
    const expenses = await Expense.find();

    const totalIncome = incomes.reduce((sum, item) => sum + item.amount, 0);
    const totalExpenses = expenses.reduce((sum, item) => sum + item.amount, 0);

    const balance = totalIncome - totalExpenses;

    res.json({
      totalIncome,
      totalExpenses,
      balance,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getSummary };