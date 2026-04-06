import { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function AddTransaction({ close }) {
  const { transactions, setTransactions } = useContext(AppContext);

  const [form, setForm] = useState({
    date: "",
    amount: "",
    category: "",
    type: "expense",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Date.now(),
      ...form,
      amount: Number(form.amount),
    };

    setTransactions([...transactions, newTransaction]);
    close();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow">
      <h2 className="font-bold mb-2">Add Transaction</h2>

      <input
        type="date"
        required
        className="border p-2 w-full mb-2"
        onChange={(e) => setForm({ ...form, date: e.target.value })}
      />

      <input
        type="number"
        placeholder="Amount"
        required
        className="border p-2 w-full mb-2"
        onChange={(e) => setForm({ ...form, amount: e.target.value })}
      />

      <input
        type="text"
        placeholder="Category"
        required
        className="border p-2 w-full mb-2"
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      />

      <select
        className="border p-2 w-full mb-2"
        onChange={(e) => setForm({ ...form, type: e.target.value })}
      >
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>

      <button className="bg-green-500 text-white px-4 py-2 rounded">
        Add
      </button>
    </form>
  );
}