import React from "react";

import { motion } from "framer-motion";
import "./index.css";

const BandSelection = ({ bands, onBandSelect }) => {
  return (
    <div className="band-carousel">
      {bands.map((band) => (
        <motion.div
          key={band.id}
          className="band-item"
          onClick={() => onBandSelect(band)}
          whileHover={{ scale: 1.1 }}
        >
          <img src={band.image} alt={band.name} className="band-image" />
          <p>{band.name}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default BandSelection;
