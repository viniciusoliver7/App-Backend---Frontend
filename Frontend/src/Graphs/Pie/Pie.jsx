import { PieChart, Pie, Legend, Tooltip } from "recharts";
import mockData from "./MOCK_DATA.json";
import { useMemo } from "react";
import "./Pie.css";

export default function Piechart() {
  const data = useMemo(() => mockData, []);

  return (
    <div className="Box-pie">
      <div className="titulo">
        <h1>Fabricantes de carro</h1>
      </div>
      <PieChart width={500} height={400}>
        <Pie
          dataKey="valor"
          isAnimationActive={false}
          nameKey="fabricante"
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#6CF492"
          label
        />
        <Tooltip />
      </PieChart>
      <div className="buttons">
        <button>Fabricante</button>
        <button>Outro Dataset</button>
      </div>
    </div>
  );
}
