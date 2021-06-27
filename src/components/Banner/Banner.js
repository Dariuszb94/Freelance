import React, { useEffect } from "react";
import "./Banner.scss";
import { animated as a, useSpring } from "react-spring";
import Typewriter from "typewriter-effect";
import Logo from "./BannerComponents/Logo";
export default function Banner() {
  const shadowRaise = useSpring({
    from: {
      textShadow: "rgb(255 255 255) 0px 0px 0px",
    },
    to: async (next) => {
      while (1) {
        await next({
          textShadow: "rgb(255 255 255) 0px 0px 2px",
        });

        await next({ textShadow: "rgb(255 255 255) 0px 0px 7px" });
      }
    },
  });

  useEffect(() => {
    const banner = document.querySelector(".banner");
    const range = 36;
    const calcValue = (a, b) => ((a / b) * range - range / 2).toFixed(1);
    let timeout;
    document.addEventListener(
      "mousemove",
      ({ x, y }) => {
        if (timeout) {
          window.cancelAnimationFrame(timeout);
        }

        timeout = window.requestAnimationFrame(() => {
          const yValue = calcValue(y, window.innerHeight);
          const xValue = calcValue(x, window.innerWidth);
          if (window.innerWidth > 1000) {
            banner.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;
          }
        });
      },
      false
    );
  }, []);
  return (
    <section className="banner-container">
      <Logo />
      <a.div className="banner">
        <a.h1 style={shadowRaise} className="banner-title">
          I make nice things
        </a.h1>
        <h2 className="banner-subtitle">Dariusz Berer</h2>
        <h2 className="banner-subtitle">
          <Typewriter
            options={{
              delay: 68,
            }}
            onInit={(typewriter) => {
              typewriter.deleteAll().typeString("Web Developer").start();
            }}
          />
        </h2>
        <h2 className="banner-subtitle-mobile">Dariusz Berer</h2>
        <h2 className="banner-subtitle-mobile">Web Developer</h2>
        <h2 className="banner-subtitle-mobile">Freelancer</h2>
      </a.div>
    </section>
  );
}
