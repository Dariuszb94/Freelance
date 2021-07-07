import Typewriter from "typewriter-effect";
import "./Contact.scss";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import GitHubIcon from "@material-ui/icons/GitHub";
import { useInView } from "react-intersection-observer";
import React, { useState, Fragment } from "react";
import { useSpring, animated as a, interpolate, useTrail } from "react-spring";
import { useDebounce } from "use-debounce";

const mail = ["d", "b", "@", "b", "e", "r", "e", "r"];
const phone = ["5", "3", "5", "2", "6", "2", "5", "6", "2"];
const git = [
  "g",
  "i",
  "t",
  "h",
  "u",
  "b",
  ".",
  "c",
  "o",
  "m",
  "/",
  "D",
  "a",
  "r",
  "i",
  "u",
  "s",
  "z",
  "b",
  "9",
  "4",
];

const Trail = ({ open, children }) => {
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
          key={index}
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
          }}
        >
          {items[index]}
        </a.div>
      ))}
    </>
  );
};
const SqueezeSpring = ({ children }) => {
  const [stateRaw, toggle] = useState(false);

  const [state] = useDebounce(stateRaw, 40);
  const { x, y } = useSpring({
    from: { x: !state ? 1 : 0, y: !state ? 1 : 0 },
    to: { x: 1, y: 1 },
    config: { mass: 0.5, tension: 120, friction: 2, precision: 0.001 },
    reset: state,
    onStart: () => toggle(false),
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

const Contact = ({ ...props }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="contact">
      {inView ? (
        <h2 className="contact__header">
          <Typewriter
            options={{
              delay: 68,
            }}
            onInit={(typewriter) => {
              typewriter.deleteAll().typeString("Want to contact me?").start();
            }}
          />
        </h2>
      ) : null}
      {inView ? (
        <div className="contact__content">
          <a.a
            className="slogan"
            href="mailto:db@berer.pl"
            className="contact__links__link"
          >
            <MailIcon />
            <Fragment>
              <Trail key="trail-1">
                {mail.map((word, index) => (
                  <SqueezeSpring key={index} className="letter">
                    {word}
                  </SqueezeSpring>
                ))}
              </Trail>
            </Fragment>
          </a.a>
          <a.a
            className="slogan"
            href="mailto:db@berer.pl"
            className="contact__links__link"
          >
            <PhoneIcon />
            <Fragment>
              <Trail key="trail-2">
                {phone.map((word, index) => (
                  <SqueezeSpring key={index} className="letter">
                    {word}
                  </SqueezeSpring>
                ))}
              </Trail>
            </Fragment>
          </a.a>
          <a.a
            className="slogan"
            href="https://github.com/Dariuszb94"
            className="contact__links__link"
          >
            <GitHubIcon />
            <Fragment>
              <Trail key="trail-3">
                {git.map((word, index) => (
                  <SqueezeSpring key={index} className="letter">
                    {word}
                  </SqueezeSpring>
                ))}
              </Trail>
            </Fragment>
          </a.a>
        </div>
      ) : null}
    </section>
  );
};

export default Contact;
