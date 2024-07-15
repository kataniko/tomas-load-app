import React from "react";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

//Background Animation using Spline and Framer-Motion

const BackgroundAnimation = () => {
  return (
    <motion.div
      className="spline-background"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 10, ease: "easeInOut" }}
    >
      <Spline scene="https://draft.spline.design/tTb9SqCL1J2kmJun/scene.splinecode" />
    </motion.div>
  );
};

export default BackgroundAnimation;
