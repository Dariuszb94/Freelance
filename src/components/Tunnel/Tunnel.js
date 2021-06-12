import React, { useState, useCallback, useEffect, useRef } from "react";
import "./Tunnel.css";
import { useSpring, animated, interpolate } from "react-spring";
import Aos from "aos";
import { useInView } from "react-intersection-observer";
import "aos/dist/aos.css";
const Tunnel = () => {
  const tunnel__inner = useRef(null);
  const tunnel__outer = useRef(null);

  const [offset, offsetSet] = useState(0);

  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    const onScroll = (e) => {
      const offsetRaw =
        (e.target.documentElement.scrollTop -
          tunnel__outer.current.offsetTop +
          window.innerHeight) /
        (tunnel__outer.current.clientHeight + window.innerHeight);
      offsetRaw > 0 && offsetRaw < 1 ? offsetSet(offsetRaw) : offsetSet(0);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);

  return (
    <animated.section className="tunnel" ref={tunnel__outer}>
      <div ref={tunnel__inner} className="tunnel__sticky">
        <div ref={ref}>aa</div>
      </div>
    </animated.section>
  );
};

export default Tunnel;
