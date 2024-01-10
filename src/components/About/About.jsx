import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import React, { useEffect } from 'react';


const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

const pageVariants = {
  initial: {
    opacity: 0,
    x: "100vw",
    pageTransition
  },
  in: {
    opacity: 1,
    x: 0,
    pageTransition
  },
  out: {
    opacity: 0,
    x: "-100vw",
    pageTransition
  }
};

const About = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("in");
  }, [controls]);


    return (
      <motion.div
        initial="initial"
        animate={controls}
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        {'TEST'}
      </motion.div>
    );
};
  
export default About;