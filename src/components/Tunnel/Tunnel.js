import React, { useState, useEffect, useRef } from "react";
import "./Tunnel.scss";
import { useSpring, animated as a } from "react-spring";
import Spotlight from "./TunnelComponents/Spotlight";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";
import Texts from "./TunnelComponents/Texts";
const Tunnel = () => {
  const tunnel__outer = useRef(null);
  const tunnel__inner = useRef(null);
  const [offset, offsetSet] = useState(0);
  const [scrollOnScene, scrollOnSceneSet] = useState(0);
  const contentPropsLT = useSpring({
    opacity: offset,
    left: `${50 - 50 * offset}%`,
    top: `${50 - 50 * offset}%`,
    transform: `translate(${-50 + 50 * offset}%, ${
      -50 + 50 * offset
    }%) rotate(${offset * 45}deg)`,
  });

  const scrollWidth = useSpring({
    width: `${scrollOnScene > 0 ? scrollOnScene * 100 : 0}%`,
    opacity: `${scrollOnScene <= 0 ? 0 : 1}`,
    boxShadow: `0px 0px 8px ${8 * scrollOnScene}px #8306b1`,
  });
  const contentPropsRT = useSpring({
    opacity: offset,
    left: `${50 + 50 * offset}%`,
    top: `${50 - 50 * offset}%`,
    transform: `translate(${-100 * offset}%, ${-50 + 50 * offset}%) rotate(${
      offset * -45
    }deg)`,
  });
  const illuminateLeft = useSpring({
    background: `linear-gradient(
      to right,
      #8306b1 -89%,
      rgba(255, 255, 255, 0) ${
        window.innerWidth < 500 ? scrollOnScene * 70 : scrollOnScene * 100
      }%
    )`,
  });
  const illuminateRight = useSpring({
    background: `linear-gradient(
      to left,
      #8306b1 -89%,
      rgba(255, 255, 255, 0) ${
        window.innerWidth < 500 ? scrollOnScene * 70 : scrollOnScene * 100
      }%
    )`,
  });

  useEffect(() => {
    const onScroll = (e) => {
      const offsetRaw =
        (e.target.documentElement.scrollTop -
          tunnel__outer.current.offsetTop +
          window.innerHeight) /
        tunnel__inner.current.clientHeight;
      const scrollOnSceneRaw =
        (e.target.documentElement.scrollTop - tunnel__outer.current.offsetTop) /
        (tunnel__outer.current.clientHeight -
          tunnel__inner.current.clientHeight -
          80);

      if (scrollOnSceneRaw > 0 && scrollOnSceneRaw <= 1) {
        scrollOnSceneSet(scrollOnSceneRaw);
      } else if (scrollOnSceneRaw > 1) {
        scrollOnSceneSet(1);
      } else {
        scrollOnSceneSet(0);
      }
      if (offsetRaw < 0) {
        offsetSet(0);
      }

      if (offsetRaw > 0 && offsetRaw <= 1) {
        offsetSet(offsetRaw);
      }

      if (offsetRaw > 1) offsetSet(1);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);

  return (
    <a.section className="tunnel" ref={tunnel__outer}>
      <div className="tunnel__sticky">
        <div className="tunnel__sticky-inner" ref={tunnel__inner}>
          <a.div style={contentPropsLT} className="tunnel__box__lt">
            <div className="spotlight__inner">
              <Spotlight />
              <div className="spotlight__inner__light">
                <a.div
                  className="spotlight__inner__light__bg"
                  style={illuminateLeft}
                ></a.div>
              </div>
            </div>
          </a.div>
          <a.div style={contentPropsRT} className="tunnel__box__rt">
            <div className="spotlight__inner">
              <Spotlight />
              <div className="spotlight__inner__light">
                <a.div
                  className="spotlight__inner__light__bg"
                  style={illuminateRight}
                ></a.div>
              </div>
            </div>
          </a.div>
          <Texts scrollOnScene={scrollOnScene} />
          <a.div className="scene__text">
            {offset >= 1 ? (
              <Typewriter
                options={{
                  delay: 28,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .deleteAll()
                    .typeString("Please keep scrolling!")
                    .start();
                }}
              />
            ) : null}
            <a.hr style={scrollWidth} className="scene__text__underline" />
          </a.div>
        </div>
      </div>
    </a.section>
  );
};

export default Tunnel;
