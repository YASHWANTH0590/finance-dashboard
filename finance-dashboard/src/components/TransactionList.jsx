import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function TransactionList() {
  const { transactions, filter } = useContext(AppContext);

  const filtered = transactions.filter(t =>
    t.category.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="overflow-auto">
      <input
        placeholder="Search category..."
        className="border p-2 mb-2 w-full"
        onChange={(e) => setFilter(e.target.value)}
      />

      <table className="w-full border">
        <thead className="bg-gray-200">
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
            <th>Type</th>
          </tr>
        </thead>

        <tbody>
          {filtered.map(t => (
            <tr key={t.id} className="text-center border-t">
              <td>{t.date}</td>
              <td>₹{t.amount}</td>
              <td>{t.category}</td>
              <td>{t.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}