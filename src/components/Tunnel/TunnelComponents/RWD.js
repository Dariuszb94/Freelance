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

export default function Image() {
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
    <div class="icon-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="36"
        height="120"
        fill="none"
        viewBox="0 0 70 120"
      >
        {/* Left shield part */}

        <ShieldPart
          toggle={toggle}
          d="M1 6C1 3.23858 3.23858 1 6 1H64C66.7614 1 69 3.23858 69 6V105C69 107.761 66.7614 110 64 110H6C3.23858 110 1 107.761 1 105V6ZM35 106C38.3137 106 41 103.314 41 100C41 96.6863 38.3137 94 35 94C31.6863 94 29 96.6863 29 100C29 103.314 31.6863 106 35 106Z"
          color=" #8306b1 "
          stroke="black"
        />
        {/* Right shield part */}
      </svg>
    </div>
  );
}
