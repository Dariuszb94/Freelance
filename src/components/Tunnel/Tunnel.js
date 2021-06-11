import React, { useState, useCallback, useEffect, useRef } from "react";
import "./Tunnel.css";
import { useSpring, animated, interpolate } from "react-spring";
import Aos from "aos";
import { useInView } from "react-intersection-observer";
import "aos/dist/aos.css";
const Tunnel = () => {
  const tunnel__inner = useRef(null);
  const tunnel__outer = useRef(null);

  const [jump, jumpSet] = useState(0);
  const [offset, offsetSet] = useState(0);
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  useEffect(() => {
    console.log(offset);
    let calcOffset =
      (tunnel__inner.current.offsetTop - tunnel__outer.current.offsetTop) /
      jump;
    const onScroll = (e) => {
      offsetSet(calcOffset);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);
  useEffect(() => {
    jumpSet(
      tunnel__outer.current.clientHeight - tunnel__inner.current.clientHeight
    );
  }, []);
  return (
    <animated.section className="tunnel" ref={ref} ref={tunnel__outer}>
      <div ref={tunnel__inner} className="tunnel__sticky"></div>
    </animated.section>
  );
};

export default Tunnel;
