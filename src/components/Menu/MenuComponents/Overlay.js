import React, { useEffect } from "react";
import { useSpring, animated as a } from "react-spring";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";

const Overlay = ({ menuShow, menuShowSet }) => {
  const innerExpand = useSpring({
    to: { transform: "translate(-50%, -50%) scale(1)" },
    from: { transform: "translate(-50%, -50%) scale(0.1)" },
    config: { duration: 1000 },
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

        <ul className="menu">
          <li>
            <a
              className="overlay__link"
              href="/#projects"
              onClick={() => menuShowSet(false)}
            >
              Projects
            </a>
          </li>
          <li>
            <a className="overlay__link" href="mailto:db@berer.pl">
              <MailIcon />
              <span className="overlay__link__text">db@berer.pl</span>
            </a>
          </li>
          <li>
            <a className="overlay__link" href="tel+48535252562">
              <MailIcon />
              <span className="overlay__link__text">535 262 562</span>
            </a>
          </li>
        </ul>
      </div>
    </a.div>
  );
};
export default Overlay;
