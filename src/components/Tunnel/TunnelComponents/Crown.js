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

export default function Crown() {
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
        width="95"
        height="138"
        fill="none"
        viewBox="0 0 220 138"
      >
        {/* Left shield part */}

        <ShieldPart
          toggle={toggle}
          d="M55 51L110 3.8147e-06L165 51L220 0V51V138H110H0V51V3.8147e-06L55 51Z"
          color=" #8306b1 "
          stroke="black"
        />
        {/* Right shield part */}
      </svg>
    </div>
  );
}
