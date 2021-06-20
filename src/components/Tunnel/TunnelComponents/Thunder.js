import { useSpring, animated } from "react-spring";
import { useState, useEffect } from "react";

function useAnimatedPath({ toggle, delay }) {
  const [length, setLength] = useState(null);
  const animatedStyle = useSpring({
    strokeDashoffset: toggle ? 0 : length,
    strokeDasharray: length,
    delay: 400,
    config: { friction: 80 },
  });

  return {
    style: animatedStyle,
    ref: (ref) => {
      // The ref is `null` on component unmount
      if (ref) {
        setLength(ref.getTotalLength());
      }
    },
  };
}

function Checkmark({ toggle }) {
  const animationProps = useAnimatedPath({
    toggle,
    delay: 500,
  });

  return (
    <animated.path {...animationProps} stroke="#4ADE80" strokeWidth="24" />
  );
}

function ShieldPart({ color, d, toggle }) {
  const animationStrokeProps = useAnimatedPath({ toggle });

  return (
    <animated.path
      {...animationStrokeProps}
      // as the `animationStrokeProps` have a `style` property
      // on it, it would be overriden by just passing
      // `style={animationFillStyle}`

      stroke={color}
      strokeWidth="4"
      d={d}
    />
  );
}

export default function Thunder() {
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    // `setImmediate` is roughly equal to `setTimeout(() => { ... }, 0)
    // Using `setToggle` without `setImmediate` breaks the animation
    // as we first need to allow for the measurement of the `path`
    // lengths using `.getTotalLength()`
    setImmediate(() => {
      setToggle(true);
    });
  }, []);

  return (
    <div className="icon-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="114"
        fill="none"
        viewBox="0 0 105 114"
      >
        {/* Left shield part */}

        <ShieldPart
          toggle={toggle}
          d="M69.2128 1.49428L103.7 0.536306L62.6575 39.1358L61.7385 40H63H87.0746L40.6877 77.1096L39.5746 78H41H62.5782L2.37955 111.599L26.872 84.3341L27.6213 83.5H26.5H11.7071L48.3536 46.8536L49.1815 46.0256L48.0109 46.0001L26.1492 45.5249L49.3572 21.3499L49.3607 21.3463L69.2128 1.49428Z"
          color="#8306b1"
          stroke="black"
        />
        {/* Right shield part */}
      </svg>
    </div>
  );
}
