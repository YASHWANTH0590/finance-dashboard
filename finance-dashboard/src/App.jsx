import { useContext, useState } from "react";
import { AppContext } from "./context/AppContext";
import SummaryCards from "./components/SummaryCards";
import TransactionList from "./components/TransactionList";
import RoleSwitcher from "./components/RoleSwitcher";
import Insights from "./components/Insights";
import BalanceChart from "./components/BalanceChart";
import CategoryChart from "./components/CategoryChart";
import AddTransaction from "./components/AddTransaction";

export default function App() {
  const { transactions, role } = useContext(AppContext);

  const [showForm, setShowForm] = useState(false);

  const chartData = transactions.map((t) => ({
    date: t.date,
    amount: t.amount,
  }));

  const categoryData = Object.values(
    transactions.reduce((acc, t) => {
      if (t.type === "expense") {
        acc[t.category] = acc[t.category] || {
          name: t.category,
          value: 0,
        };
        acc[t.category].value += t.amount;
      }
      return acc;
    }, {})
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Finance Dashboard</h1>
        <RoleSwitcher />
      </div>

      <SummaryCards />

      <div className="flex gap-4 flex-wrap">
        <BalanceChart data={chartData} />
        <CategoryChart data={categoryData} />
      </div>


      {role === "admin" && (
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Add Transaction
        </button>
      )}

      {/* Form Modal */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow w-80">
            <AddTransaction close={() => setShowForm(false)} />
          </div>
        </div>
      )}

      {/* Table */}
      <TransactionList />

      {/* Insights */}
      <Insights transactions={transactions} />
    </div>
  );
}