import React from "react";
import { motion } from "framer-motion";

function LoadingIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, rotate: 360 }}
      transition={{
        duration: 2,      // Duration of one full rotation
        repeat: Infinity, // Keeps the rotation going infinitely
        repeatType: "loop", // Loops the animation
        ease: "linear",   // Smooth continuous rotation
      }}
    >
      Loading...
    </motion.div>
  );
}

export default LoadingIndicator;