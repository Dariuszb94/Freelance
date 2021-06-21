import "./App.css";
import Tunnel from "./components/Tunnel/Tunnel";
import Component from "./components/Component/Component";
import Deck from "./components/Cards/Cards";
function App() {
  return (
    <div className="App">
      <Component />
      <Tunnel />
      <Deck />
    </div>
  );
}

export default App;
