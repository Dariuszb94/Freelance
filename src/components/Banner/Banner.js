import React, { useState, useEffect } from "react";
import "./Banner.scss";
export default function Banner() {
  useEffect(() => {
    const banner = document.querySelector(".banner");
    const range = 36;

    // const calcValue = (a, b) => (((a * 100) / b) * (range / 100) -(range / 2)).toFixed(1);
    const calcValue = (a, b) => ((a / b) * range - range / 2).toFixed(1); // thanks @alice-mx

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
      <div className="banner">
        <h1 className="banner-title">I make nice things</h1>
        <h2 className="banner-subtitle">Dariusz Berer - Frontend Developer</h2>
        <h2 className="banner-subtitle-mobile">Dariusz Berer</h2>
        <h2 className="banner-subtitle-mobile">Frontend Developer</h2>
      </div>
    </section>
  );
}
