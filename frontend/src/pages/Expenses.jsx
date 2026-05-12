import { useEffect, useState } from "react";
import { addExpense, getExpenses } from "../services/api";

function Expenses() {
  const [form, setForm] = useState({
    category: "",
    amount: "",
    description: "",
  });

  const [expenses, setExpenses] = useState([]);

  // 📥 Load expenses from backend
  const loadExpenses = async () => {
    const res = await getExpenses();
    setExpenses(res.data);
  };

  useEffect(() => {
    loadExpenses();
  }, []);

  // ➕ Add expense
  const handleSubmit = async (e) => {
    e.preventDefault();

    await addExpense(form);

    setForm({
      category: "",
      amount: "",
      description: "",
    });

    loadExpenses();
  };

  // 🗑️ Delete expense
  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/expense/${id}`, {
        method: "DELETE",
      });

      loadExpenses();
    } catch (error) {
      console.log("Delete error:", error);
    }
  };

  return (
    <div>
      <h1>Expenses</h1>

      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Category"
          value={form.category}
          onChange={(e) =>
            setForm({ ...form, category: e.target.value })
          }
        />
        <br />

        <input
          placeholder="Amount"
          type="number"
          value={form.amount}
          onChange={(e) =>
            setForm({ ...form, amount: e.target.value })
          }
        />
        <br />

        <input
          placeholder="Description"
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
        />
        <br />

        <button type="submit">Add Expense</button>
      </form>

      {/* LIST */}
      <h3>Expense List</h3>

      <ul>
        {expenses.map((exp) => (
          <li key={exp._id}>
            {exp.category} - Ksh {exp.amount} — {exp.description}

            <button
              onClick={() => handleDelete(exp._id)}
              style={{ marginLeft: "10px", color: "red" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Expenses;