import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import "./Line.css";
export default function Linechart() {
  const data = [
    {
      data: "01/01/2021",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      data: "02/01/2021",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      data: "03/01/2021",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      data: "04/01/2021",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      data: "05/01/2021",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      data: "06/01/2021",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      data: "07/01/2021",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <>
      <div className="box-line">
        <h1>Crescimento da empresa</h1>
        <LineChart width={750} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis stroke="#6CF492" dataKey="data" />
          <YAxis stroke="#6CF492" />
          <Tooltip wrapperStyle={{ backgroundColor: 'green', color: 'blue' }} />
          <Line type="monotone" dataKey="uv" stroke="#6CF492" />
        </LineChart>
      </div>
    </>
  );
}
