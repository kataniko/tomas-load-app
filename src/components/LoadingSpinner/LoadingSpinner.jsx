import React from 'react';
import { motion } from 'framer-motion';
import "./styles.css"

//Loading Spinner

const LoadingSpinner = () => {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity }}
      className="loading-spinner"
    >
      <div className="spinner"></div>
    </motion.div>
  );
};

export default LoadingSpinner;
