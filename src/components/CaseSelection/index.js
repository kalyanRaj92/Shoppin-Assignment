import React from "react";

import { motion } from "framer-motion";
import "./index.css";

const CaseSelection = ({ cases, onCaseSelect }) => {
  return (
    <div className="case-grid">
      {cases.map((item) => (
        <motion.div
          key={item.id}
          className="case-item"
          onClick={() => onCaseSelect(item)}
          whileHover={{ scale: 1.1 }}
        >
          <img src={item.image} alt={item.name} className="case-image" />
          <p>{item.name}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default CaseSelection;
