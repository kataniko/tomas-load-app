import * as React from 'react';
import { motion } from 'framer-motion';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ['white'];

const MenuItem = ({ i }) => {
  const style = { border: `2px solid ${colors[i % colors.length]}` };
  return (
    <motion.li
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="icon-placeholder" style={style}></div>
      <div className="text-placeholder" style={style}>ksjdhfjksdf</div>
    </motion.li>
  );
};

export default MenuItem; // Ensure MenuItem is exported
