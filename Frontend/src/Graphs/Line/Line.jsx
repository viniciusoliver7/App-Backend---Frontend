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
import { useState,useEffect } from "react";
import axios from "axios";

export default function Linechart() {
  const [dados, setDados] = useState([]);

  async function fetchData() {
    await axios.get("http://54.91.65.106/acquisitions").then((response) => {
      setDados(response.data);
    });
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="box-line">
        <h1>Crescimento da empresa</h1>
        <LineChart width={750} height={300} data={dados}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis stroke="#6CF492" dataKey="Acquired Company" />
          <YAxis stroke="#6CF492" />
          <Tooltip wrapperStyle={{ backgroundColor: 'green', color: 'blue' }} />
          <Line type="monotone" dataKey="uv" stroke="#6CF492" />
        </LineChart>
      </div>
    </>
  );
}
