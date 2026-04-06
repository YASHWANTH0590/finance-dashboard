import { LineChart, Line, XAxis, YAxis, Tooltip } from "recharts";

export default function BalanceChart({ data }) {
  return (
    <LineChart width={400} height={250} data={data}>
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Line dataKey="amount" />
    </LineChart>
  );
}