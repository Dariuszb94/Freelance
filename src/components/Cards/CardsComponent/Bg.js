import React from "react";
import { animated as a, useSpring } from "react-spring";

function Bg() {
  const swipeRight = useSpring({
    from: {
      transform: "translateX(-50px)",
    },
    to: async (next) => {
      while (1) {
        await next({
          transform: "translateX(10px)",
        });

        await next({ transform: "translateX(60px)" });
      }
    },
  });
  const swipeLeft = useSpring({
    from: {
      transform: "translateX(50px)",
    },
    to: async (next) => {
      while (1) {
        await next({
          transform: "translateX(-10px)",
        });

        await next({ transform: "translateX(-60px)" });
      }
    },
  });
  return (
    <svg
      width="355"
      height="309"
      viewBox="0 0 355 309"
      xmlns="http://www.w3.org/2000/svg"
      className="projects__bg"
      fill="#8306b1"
    >
      <a.path
        style={swipeRight}
        d="M281.5 166.57L352.357 236L281.5 305.43V279V277.5H280H1.5V194.5H280H281.5V193V166.57Z"
        stroke="black"
        strokeWidth="3"
      />
      <a.path
        d="M73 142.43L2.1432 73L73 3.56987V30V31.5H74.5L353 31.5V114.5L74.5 114.5H73V116V142.43Z"
        stroke="black"
        strokeWidth="3"
        style={swipeLeft}
      />
    </svg>
  );
}

export default Bg;
