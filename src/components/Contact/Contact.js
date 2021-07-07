import React from "react";
import Typewriter from "typewriter-effect";
import "./Contact.scss";
import { useInView } from "react-intersection-observer";
function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  return (
    <section ref={ref} className="contact">
      <h2 className="contact__header">
        {inView ? (
          <Typewriter
            options={{
              delay: 68,
            }}
            onInit={(typewriter) => {
              typewriter.deleteAll().typeString("Contact").start();
            }}
          />
        ) : null}
      </h2>
    </section>
  );
}

export default Contact;
