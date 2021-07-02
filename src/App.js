import "./App.css";
import Tunnel from "./components/Tunnel/Tunnel";
import Deck from "./components/Cards/Cards";
import Contact from "./components/Contact/Contact";
import Banner from "./components/Banner/Banner";
import Cursor from "./components/Cursor/Cursor";
import Menu from "./components/Menu/Menu";
import React, { useState, useEffect } from "react";
function App() {
  return (
    <div className="App">
      <Menu />
      <Cursor />
      <Banner />
      <Tunnel />
      <Deck />
      <Contact />
    </div>
  );
}

export default App;
