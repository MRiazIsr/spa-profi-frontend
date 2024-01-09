import React, { useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import styles from './Home.module.css';

const pageVariants = {
  initial: {
    opacity: 0,
    x: "100vw",
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: "-100vw",
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

const Home = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start("in");
  }, [controls]);

  return (
    <AnimatePresence>
      <motion.div
        initial="initial"
        animate={controls}
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
      >
        <div className={styles.main}>
          <div className={styles.box}>
            <h1>
              PRO.beauty
            </h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Mauris in ipsum eget quam rhoncus faucibus. 
            Donec eu vehicula nulla. 
            Vestibulum lacus erat, pretium et eleifend eu, iaculis eu nulla. 
            Interdum et malesuada fames ac ante ipsum primis in faucibus. 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Mauris in ipsum eget quam rhoncus faucibus. 
            Donec eu vehicula nulla. 
            Vestibulum lacus erat, pretium et eleifend eu, iaculis eu nulla. 
            Interdum et malesuada fames ac ante ipsum primis in faucibus. 
            <input type="button" className={styles.button} value="Products"></input>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Home;