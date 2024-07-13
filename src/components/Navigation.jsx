import * as React from "react";
import { motion } from "framer-motion";
import { Box } from "@mui/material";
import MenuItem from "./sidebar/MenuItem"; // Adjust path as per your project structure

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const itemIds = [0, 1, 2, 3, 4];

const Navigation = () => (
  <motion.ul variants={variants}>
    {itemIds.map((i) => (
      <MenuItem key={i} i={i} />
    ))}
  </motion.ul>
);

export default Navigation; // Ensure Navigation is exported
