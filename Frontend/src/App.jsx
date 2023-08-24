import "./App.css";
import Linechart from "./Graphs/Line/Line";
import "./Graphs/Pie/Pie";
import Piechart from "./Graphs/Pie/Pie";
import Table from "./Graphs/Table/Table";

function App() {
  return (
    <>
      <header>
        <h2>Seja bem vindo!</h2>
        <h2>Dashboard</h2>
      </header>
      <div className="box">
        <div className="Main">
          <div className="App">
            <Piechart />
            <Linechart/>
          </div>
          <div className="Table">
            <Table />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
