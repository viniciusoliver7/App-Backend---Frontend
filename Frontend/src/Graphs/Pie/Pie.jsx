import { PieChart, Pie, Legend, Tooltip } from "recharts";
import { useMemo, useState, useEffect } from "react";
import "./Pie.css";
import axios from "axios";

export default function Piechart() {
  const [dadosDesc, setDadosDesc] = useState([]);
  const [dadosAsc, setDadosAsc] = useState([]);
  const [name, setName] = useState("Aquisições com os maiores preços");

  async function fetchDatadesc() {
    await axios
      .get("http://54.91.65.106/acquisitionsprice?limit=10&orderby=desc")
      .then((response) => {
        setDadosDesc(response.data);
      });
  }
  async function fetchDataAsc() {
    await axios
      .get("http://54.91.65.106/acquisitionsprice?limit=10&orderby=asc")
      .then((response) => {
        setDadosAsc(response.data);
      });
  }
  useEffect(() => {
    fetchDatadesc();
    fetchDataAsc();
  }, []);

  return (
    <div className="pies">
      <div className="Pie-1">
        <div className="titulo">
          <h1>Aquisições com os maiores preços</h1>
        </div>
        <PieChart width={600} height={400}>
          <Pie
            dataKey="Price"
            isAnimationActive={false}
            nameKey="Acquired Company"
            data={dadosDesc}
            cx="50%"
            cy="40%"
            outerRadius={100}
            fill="#6CF492"
            label
          />
          <Tooltip />
        </PieChart>
      </div>
      <div className="Pie-1">
        <div className="titulo">
          <h1>Aquisições com os menores preços</h1>
        </div>
        <PieChart width={600} height={400}>
          <Pie
            dataKey="Price"
            isAnimationActive={false}
            nameKey="Acquired Company"
            data={dadosAsc}
            cx="50%"
            cy="40%"
            outerRadius={100}
            fill="#6CF492"
            label
          />
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
}
