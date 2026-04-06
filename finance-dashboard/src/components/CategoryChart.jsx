import { PieChart, Pie, Cell } from "recharts";

export default function CategoryChart({ data }) {
  return (
    <PieChart width={300} height={250}>
      <Pie data={data} dataKey="value" nameKey="name" outerRadius={80}>
        {data.map((_, index) => (
          <Cell key={index} />
        ))}
      </Pie>
    </PieChart>
  );
}