import React from "react";
 import { motion, } from "framer-motion";

const About = () => {
  // const { scrollYProgress } = useScroll();
  // const scaleX = useSpring(scrollYProgress, {
  //   stiffness: 100,
  //   damping: 30,
  //   restDelta: 0.001,
  // });
  return (
    <>
      <motion.div
        // style={{ scaleX: scrollYProgress }}
        // className="progress-bar-animate"
      />
      <div className="about">
        <h2>About</h2>
        <>
          <article>
            <p>
            As a Software Engineer focused on outcomes, 
            I have a track record of creating user-centered
             website designs that can handle high volumes
              of traffic. With my expertise in JavaScript, 
              HTML, CSS, Python, and React, I've built 5+ 
              interactive and responsive web experiences.
               My aim is to utilize my software development
                skills and 4 years of experience in the
                 healthcare industry to develop forward-thinking
                  applications that have a positive impact on
                   future technological advancements.
            </p>
          
          </article>
        </>
      </div>
    </>
  );
};

export default About;