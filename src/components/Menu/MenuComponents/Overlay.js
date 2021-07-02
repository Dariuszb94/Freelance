import React, { useEffect } from "react";
import { useSpring, animated as a } from "react-spring";

const Overlay = ({ menuShow }) => {
  const innerExpand = useSpring({
    to: { transform: "translate(-50%, -50%) scale(1)" },
    from: { transform: "translate(-50%, -50%) scale(0.1)" },
  });
  const opacity = useSpring({
    opacity: `${menuShow ? 1 : 0}`,
  });
  const orbitSmall = useSpring({
    loop: true,
    from: { rotateZ: 0 },
    to: { rotateZ: 360 },
    config: { duration: 2000 },
  });
  const orbitBig = useSpring({
    loop: true,
    from: { rotateZ: 0 },
    to: { rotateZ: 360 },
    config: { duration: 3000 },
  });
  const orbitBiggest = useSpring({
    loop: true,
    from: { rotateZ: 0 },
    to: { rotateZ: 360 },
    config: { duration: 4000 },
  });
  return (
    <a.div className="overlay" style={opacity}>
      <div className="overlay__inner">
        <a.div className="middle-circle" style={innerExpand}></a.div>
        <a.div className="orbit-small" style={orbitSmall}></a.div>
        <a.div className="orbit-big" style={orbitBig}></a.div>
        <a.div className="orbit-biggest" style={orbitBiggest}></a.div>

        <ul className="list">
          <li>
            <a className="overlay__link" href="">
              Skills
            </a>
          </li>
          <li>
            <a className="overlay__link" href="">
              Skills
            </a>
          </li>{" "}
          <li>
            <a className="overlay__link" href="">
              Skills
            </a>
          </li>{" "}
          <li>
            <a className="overlay__link" href="">
              Skills
            </a>
          </li>{" "}
          <li>
            <a className="overlay__link" href="">
              Skills
            </a>
          </li>
        </ul>
      </div>
    </a.div>
  );
};
export default Overlay;
