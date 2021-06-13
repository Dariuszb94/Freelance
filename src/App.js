import "./App.css";
import Tunnel from "./components/Tunnel/Tunnel";
import Component from "./components/Component/Component";

function App() {
  return (
    <div className="App">
      <Component />

      <Tunnel />
      <Component />
    </div>
  );
}

export default App;
