import React from "react";

import "./index.css";

const WatchPreview = ({ caseData, size, band }) => {
  return (
    <div className="preview-container">
      <img src={caseData.image} alt="Selected Case" className="preview-case" />
      <p>{size}mm</p>
      <img src={band.image} alt="Selected Band" className="preview-band" />
    </div>
  );
};

export default WatchPreview;

  