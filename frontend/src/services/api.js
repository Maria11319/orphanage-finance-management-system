import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// AUTH
export const registerUser = (data) =>
  API.post("/auth/register", data);

export const loginUser = (data) =>
  API.post("/auth/login", data);

// EXPENSES
export const addExpense = (data) =>
  API.post("/expense", data);

export const getExpenses = () =>
  API.get("/expense");

// DONATIONS / INCOME
export const addIncome = (data) =>
  API.post("/income", data);

export const getIncome = () =>
  API.get("/income");

// SUMMARY
export const getSummary = () =>
  API.get("/summary");

export default API;