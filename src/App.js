import "./App.css";
import Tunnel from "./components/Tunnel/Tunnel";
import Component from "./components/Component/Component";
import Deck from "./components/Cards/Cards";
import Contact from "./components/Contact/Contact";
function App() {
  return (
    <div className="App">
      <Component />
      <Tunnel />
      <Deck />
      <Contact />
    </div>
  );
}

export default App;
