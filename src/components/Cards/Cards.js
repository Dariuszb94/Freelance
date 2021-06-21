import { render } from "react-dom";
import React, { useState, useEffect } from "react";
import { useSprings, animated, interpolate, useSpring } from "react-spring";
import { useGesture } from "react-use-gesture";
import "./Cards.scss";
import Immergas from "../../assets/immergas.jpg";
import Pradom from "../../assets/pradom.jpg";
import { useInView } from "react-intersection-observer";
import Typewriter from "typewriter-effect";

const cards = [
  { link: "https://pradom.pl", img: Pradom },
  { link: "https://25lat.immergas.pl", img: Immergas },
];

export default function Deck() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  // These two are just helpers, they curate spring data, values that are later being interpolated into css
  const to = (i) => ({
    x: 0,
    y: i * -4,
    scale: 1,
    rot: -10 + Math.random() * 20,
    delay: i * 100,
  });
  const from = (i) => ({
    x: 0,
    rot: 0,
    scale: 1.5,
    y: -1000,
  });
  // This is being used down there in the view, it interpolates rotation and scale into a css transform
  const trans = (r, s) =>
    `perspective(1500px) rotateX(30deg) rotateY(${
      r / 10
    }deg) rotateZ(${r}deg) scale(${s})`;
  const [gone] = useState(() => new Set()); // The set flags all the cards that are flicked out
  const appear = useSpring({
    translateY: `${!inView ? 400 * Math.random() : 0}px`,
    translateX: `${!inView ? 300 * Math.random() : 0}px`,
    opacity: `${!inView ? 0 : 1}`,
  });
  const [props, set] = useSprings(cards.length, (i) => ({
    ...to(i),
    from: from(i),
  })); // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  useEffect(() => {
    console.log(inView);
  }, [inView]);
  const bind = useGesture(
    ({
      args: [index],
      down,
      delta: [xDelta],
      distance,
      direction: [xDir],
      velocity,
    }) => {
      const trigger = velocity > 0.15; // If you flick hard enough it should trigger the card to fly out
      const dir = xDir < 0 ? -1 : 1; // Direction should either point left or right
      if (!down && trigger) gone.add(index); // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
      set((i) => {
        if (index !== i) return; // We're only interested in changing spring-data for the current spring
        const isGone = gone.has(index);
        const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
        const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0); // How much the card tilts, flicking it harder makes it rotate faster
        const scale = down ? 1.1 : 1; // Active cards lift up a bit
        return {
          x,
          rot,
          scale,
          delay: undefined,
          config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
        };
      });
      if (!down && gone.size === cards.length)
        setTimeout(() => gone.clear() || set((i) => to(i)), 600);
    }
  );
  // Now we're just mapping the animated values to our view, that's it. Btw, this component only renders once. :-)
  return (
    <section className="projects" ref={ref}>
      <div className="projects__inner">
        <h2 className="projects__header">
          {inView ? (
            <Typewriter
              options={{
                delay: 28,
              }}
              onInit={(typewriter) => {
                typewriter.deleteAll().typeString("Works").start();
              }}
            />
          ) : null}
        </h2>
        {props.map(({ x, y, rot, scale }, i) => (
          <animated.div
            className="card-container"
            key={i}
            style={Object.assign(
              {
                transform: interpolate(
                  [x, y],
                  (x, y) => `translate3d(${x}px,${y}px,0)`
                ),
              },
              appear
            )}
          >
            {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
            <animated.div
              {...bind(i)}
              style={{
                transform: interpolate([rot, scale], trans),
              }}
              className="card"
            >
              <img src={cards[i].img} />
              <a className="card__link" target="_blank" href={cards[i].link}>
                Check it out
              </a>
            </animated.div>
          </animated.div>
        ))}
      </div>
    </section>
  );
}
