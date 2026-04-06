export default function Insights({ transactions }) {
  const categoryTotals = {};

  transactions.forEach(t => {
    if (t.type === "expense") {
      categoryTotals[t.category] =
        (categoryTotals[t.category] || 0) + t.amount;
    }
  });

  const highest = Object.keys(categoryTotals).reduce((a, b) =>
    categoryTotals[a] > categoryTotals[b] ? a : b
  );

  return (
    <div className="p-4 bg-gray-100 rounded">
      <h2 className="font-bold">Insights</h2>
      <p>Highest Spending Category: {highest}</p>
    </div>
  );
}