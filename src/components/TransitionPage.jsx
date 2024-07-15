// TransitionPage.js

//I was supposed to use this transition page but i gave up from the idea

import React from 'react';
import { motion } from 'framer-motion';

const TransitionPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '0vw',
        height: '0vh',
        backgroundColor: 'transparent', // semi-transparent white
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        zIndex: 9999 // Ensures the loading screen is on top of other content
      }}
    >
    </motion.div>
  );
};

export default TransitionPage;
