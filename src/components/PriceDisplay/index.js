import React from "react";

import "./index.css";

const PriceDisplay = ({ price }) => {
  return (
    <div className="price-display">
      <h2>Total Price: ${price}</h2>
    </div>
  );
};

export default PriceDisplay;