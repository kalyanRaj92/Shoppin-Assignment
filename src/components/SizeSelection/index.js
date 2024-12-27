import React from "react";

import { motion } from "framer-motion";
import "./index.css";

const SizeSelection = ({ sizes, selectedSize, onSizeSelect }) => {
  return (
    <div className="size-selector">
      {sizes.map((size) => (
        <motion.div
          key={size}
          className={`size-button ${selectedSize === size ? "active" : ""}`}
          onClick={() => onSizeSelect(size)}
          whileTap={{ scale: 0.9 }}
        >
          {size}mm
        </motion.div>
      ))}
    </div>
  );
};

export default SizeSelection;
