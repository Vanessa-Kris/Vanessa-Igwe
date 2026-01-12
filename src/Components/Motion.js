import React from "react";
import { motion } from "framer-motion";

const MouseMotionCircle = ({ x, y }) => {
  return (
    <motion.div
      className="mouse-motion-circle"
      style={{
        position: "fixed",
        top: y,
        left: x,
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        border: "12px solid #673147",
        display: { md: "block", xs: "none" },
      }}
    ></motion.div>
  );
};
export default MouseMotionCircle;
