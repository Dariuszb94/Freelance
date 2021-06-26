import "./App.css";
import Tunnel from "./components/Tunnel/Tunnel";
import Component from "./components/Component/Component";
import Deck from "./components/Cards/Cards";
import Contact from "./components/Contact/Contact";
import Banner from "./components/Banner/Banner";
import Cursor from "./components/Cursor/Cursor";
import FixedBoy from "./components/FixedBoy/FixedBoy";
function App() {
  return (
    <div className="App">
      <Cursor />
      {/* <FixedBoy /> */}
      <Banner />
      <Tunnel />
      <Deck />
      <Contact />
    </div>
  );
}

export default App;
