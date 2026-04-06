import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function SummaryCards() {
  const { transactions } = useContext(AppContext);

  const income = transactions
    .filter(t => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  const balance = income - expense;

  return (
    <div className="grid md:grid-cols-3 gap-4">
      <Card title="Balance" value={balance} color="bg-blue-500" />
      <Card title="Income" value={income} color="bg-green-500" />
      <Card title="Expenses" value={expense} color="bg-red-500" />
    </div>
  );
}

function Card({ title, value, color }) {
  return (
    <div className={`p-4 text-white rounded-xl shadow ${color}`}>
      <h2 className="text-lg">{title}</h2>
      <p className="text-2xl font-bold">₹{value}</p>
    </div>
  );
}