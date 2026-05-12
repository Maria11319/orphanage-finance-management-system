import { useEffect, useState } from "react";
import { addIncome, getIncome } from "../services/api";

function Donations() {
  const [form, setForm] = useState({
    source: "",
    amount: "",
    description: "",
  });

  const [income, setIncome] = useState([]);

  const loadIncome = async () => {
    const res = await getIncome();
    setIncome(res.data);
  };

  useEffect(() => {
    loadIncome();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addIncome(form);
    setForm({ source: "", amount: "", description: "" });
    loadIncome();
  };

  return (
    <div>
      <h1>Donations (Income)</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Source"
          value={form.source}
          onChange={(e) => setForm({ ...form, source: e.target.value })}
        />
        <br />

        <input
          placeholder="Amount"
          type="number"
          value={form.amount}
          onChange={(e) => setForm({ ...form, amount: e.target.value })}
        />
        <br />

        <input
          placeholder="Description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
        />
        <br />

        <button>Add Donation</button>
      </form>

      <h3>Donation List</h3>
      <ul>
        {income.map((inc) => (
          <li key={inc._id}>
            {inc.source} - Ksh {inc.amount}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Donations;