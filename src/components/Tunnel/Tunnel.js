import React, { useState } from "react";
import "./Tunnel.css";
import { useSpring, animated as a } from "react-spring";

const Tunnel = () => {
  const [x, xSet] = useState(false);
  const contentProps = useSpring({
    opacity: x ? 1 : 0,
    marginTop: x ? 0 : -500,
  });
  return (
    <div className="tunnel">
      <button onClick={() => xSet((a) => !a)}> Click</button>
      <a.div className="red" style={contentProps}>
        <h1>asdasdasd</h1>
      </a.div>
      <span className="tunnel__text">{x}</span>
    </div>
  );
};

export default Tunnel;
