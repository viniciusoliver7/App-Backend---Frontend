import "./App.css";
import Switch from "./Components/Routes/Routes";
import Links from "./Components/Routes/Links"

function App() {
  return (
    <>
    <header>
      <Links/>
    </header>
      <main>
      <Switch/>
      </main>
    </>
  );
}

export default App;
