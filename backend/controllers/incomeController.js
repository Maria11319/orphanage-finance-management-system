const Income = require("../models/Income");

// ➕ Add Income
const addIncome = async (req, res) => {
  try {
    const { source, amount, description } = req.body;

    const income = await Income.create({
      source,
      amount,
      description,
    });

    res.status(201).json(income);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 📥 Get All Income
const getIncome = async (req, res) => {
  try {
    const incomes = await Income.find().sort({ date: -1 });
    res.json(incomes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addIncome, getIncome };