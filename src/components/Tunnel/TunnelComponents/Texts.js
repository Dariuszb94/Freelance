import React, {
  useState,
  useCallback,
  useMemo,
  useEffect,
  useRef,
  Fragment,
} from "react";
import "../Tunnel.scss";
import {
  useSpring,
  animated as a,
  interpolate,
  config,
  useTrail,
} from "react-spring";
import { useDebounce } from "use-debounce";
const First = ["S", "t", "y", "l", "i", "s", "h"];
const Top = ["T", "o", "p"];
const Quality = ["Q", "u", "a", "l", "i", "t", "y"];
const Responsive = ["R", "e", "s", "p", "o", "n", "s", "i", "v", "e"];

function Trail({ open, children, ...props }) {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 135 },
    opacity: 1,
    x: 1,
    y: 1,

    from: {
      opacity: 0,
      x: 0,
      y: 0,
    },
  });
  return (
    <>
      {trail.map(({ x, y, ...rest }, index) => (
        <a.div
          key={items[index].key}
          className="trails-text"
          style={{
            ...rest,
            transform: interpolate(
              [
                x.interpolate({
                  range: [0, 0.9, 1],
                  output: [0, 1.2, 1],
                }),
                y.interpolate({
                  range: [0, 0.9, 1],
                  output: [0, 0.8, 1],
                }),
              ],
              (x, y) => `scale(${x},${y})`
            ),

            // r.interpolate((r) => `rotate(${r}deg)`)
          }}
        >
          {items[index]}
        </a.div>
      ))}
    </>
  );
}
const SqueezeSpring = ({ children }) => {
  const [stateRaw, toggle] = useState(false);

  const [state] = useDebounce(stateRaw, 40);
  const { x, y } = useSpring({
    from: { x: !state ? 1 : 0, y: !state ? 1 : 0 },
    to: { x: 1, y: 1 },
    config: { mass: 0.5, tension: 120, friction: 2, precision: 0.001 },
    reset: state,
    onStart: (state) => toggle(false),
  });

  return (
    <a.div
      onMouseEnter={() => toggle(true)}
      onMouseLeave={() => toggle(false)}
      style={{
        transform: interpolate(
          [
            x.interpolate({
              range: [0, 0.3, 1],
              output: [1, 1.3, 1],
            }),
            y.interpolate({
              range: [0, 0.3, 1],
              output: [1, 0.7, 1],
            }),
          ],
          (x, y) => `scale(${x},${y})`
        ),
      }}
    >
      {children}
    </a.div>
  );
};

const Texts = ({ ...props }) => {
  const ResponsiveOpacity = useSpring({
    opacity: props.scrollOnScene > 0.8 ? 1 : 0,
    color: "red",
  });

  const shadow = useSpring({
    textShadow: `0px 0px ${
      props.scrollOnScene >= 0.6 ? 50 * (props.scrollOnScene - 0.6) : 0
    }px #fff`,
  });
  return (
    <div className="slogans">
      <a.div className="slogan" style={shadow}>
        {props.scrollOnScene > 0 ? (
          <Trail>
            {First.map((word) => (
              <SqueezeSpring className="letter">{word}</SqueezeSpring>
            ))}
          </Trail>
        ) : null}
      </a.div>
      <a.div className="slogan" style={shadow}>
        {props.scrollOnScene > 0.3 ? (
          <Trail>
            {Top.map((word) => (
              <SqueezeSpring className="letter">{word}</SqueezeSpring>
            ))}
            &nbsp;&nbsp;
            {Quality.map((word) => (
              <SqueezeSpring>{word}</SqueezeSpring>
            ))}
          </Trail>
        ) : null}
      </a.div>
      <a.div className="slogan" style={shadow}>
        {props.scrollOnScene > 0.6 ? (
          <Trail>
            {Responsive.map((word) => (
              <SqueezeSpring className="letter">{word}</SqueezeSpring>
            ))}
          </Trail>
        ) : null}
      </a.div>
    </div>
  );
};

export default Texts;
