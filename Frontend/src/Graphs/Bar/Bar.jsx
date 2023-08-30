import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import "./Bar.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Barchart() {
  const [dados, setDados] = useState([]);
  const [title, setTitle] = useState("Empresas com as maiores compras");
  const [isDisabled1,setIsDisabled1] = useState(true)
  const [isDisabled2,setIsDisabled2] = useState(false)


  async function fetchData(ordem) {
    await axios
      .get(`http://54.91.65.106/acquisitionsprice?limit=10&orderby=${ordem}`)
      .then((response) => {
        setDados(response.data);
      });
  }
  useEffect(() => {
    fetchData("asc");
  }, []);

  function setDataMenor() {
    fetchData("desc")
    setIsDisabled2(true)
    setIsDisabled1(false)
    setTitle("Empresas com as menores compras")

  }

  function setDataMaior() {
    fetchData("asc")
    setIsDisabled2(false)
    setIsDisabled1(true)
    setTitle("Empresas com as maiores compras")

  }

  return (
    <div className="box-bar">
      <div>
        <h1 className="title-bar">{title}</h1>
      </div>
      <BarChart width={1300} height={500} data={dados}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="Acquiring Company" stroke="#ccc" />
        <YAxis tick={{ fill: "#ccc" }} axisLine={{ stroke: "#ccc" }} />
        <Tooltip />
        <Bar dataKey="Price" fill="#6CF492" />
      </BarChart>
      <button onClick={setDataMaior} disabled={isDisabled1}>Maiores Compras</button>
      <button onClick={setDataMenor} disabled={isDisabled2}>Menores Compras</button>
    </div>
  );
}
