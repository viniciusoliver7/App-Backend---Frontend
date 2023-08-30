import Barchart from "../../Graphs/Bar/Bar";
import Linechart from "../../Graphs/Line/Line";
import Piechart from "../../Graphs/Pie/Pie";
import Table from "../../Graphs/Table/Table";
import "./Home.css";

export default function Home(params) {
  return (
    <>
      <div className="box">
        <h2 className="title">Dashboard</h2>
        <div className="Main">
          <div className="App">
            <Piechart />
          </div>
          <div className="bar">
            <Barchart />
          </div>
        </div>
      </div>
    </>
  );
}
