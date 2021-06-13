import React, { useState, useCallback, useEffect, useRef } from "react";
import "./Tunnel.scss";
import { useSpring, animated as a, interpolate } from "react-spring";
import Lamp from "../../assets/spotlight.svg";
import Spotlight from "./TunnelComponents/Spotlight";
import "aos/dist/aos.css";
const Tunnel = () => {
  const tunnel__outer = useRef(null);

  const [offset, offsetSet] = useState(0);
  const contentPropsLT = useSpring({
    opacity: offset,
    left: `${50 - 50 * offset}%`,
    top: `${50 - 50 * offset}%`,
    transform: `translate(${-50 + 50 * offset}%, ${
      -50 + 50 * offset
    }%) rotate(${offset * 45}deg)`,
  });
  const contentPropsRT = useSpring({
    opacity: offset,
    left: `${50 + 50 * offset}%`,
    top: `${50 - 50 * offset}%`,
    transform: `translate(${-100 * offset}%, ${-50 + 50 * offset}%) rotate(${
      offset * -45
    }deg)`,
  });
  useEffect(() => {
    const onScroll = (e) => {
      const offsetRaw =
        (e.target.documentElement.scrollTop -
          tunnel__outer.current.offsetTop +
          window.innerHeight) /
        (tunnel__outer.current.clientHeight - 100);
      if (offsetRaw < 0) offsetSet(0);

      if (offsetRaw > 0 && offsetRaw <= 1) offsetSet(offsetRaw);

      if (offsetRaw > 1) offsetSet(1);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);

  return (
    <a.section className="tunnel" ref={tunnel__outer}>
      <div className="tunnel__sticky">
        <div className="tunnel__sticky-inner">
          <a.div style={contentPropsLT} className="tunnel__box__lt">
            <div className="spotlight__inner">
              <Spotlight />
              <div className="spotlight__inner__light"></div>
            </div>
          </a.div>
          <a.div style={contentPropsRT} className="tunnel__box__rt">
            <div className="spotlight__inner">
              <Spotlight />
              <div className="spotlight__inner__light"></div>
            </div>
          </a.div>
        </div>
        {/* <a.div style={contentPropsLB} className="tunnel__box__lb"></a.div>
        <a.div style={contentPropsRB} className="tunnel__box__rb"></a.div> */}
      </div>
    </a.section>
  );
};

export default Tunnel;
