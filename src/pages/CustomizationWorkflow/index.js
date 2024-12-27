import React, { useState } from "react";

import { cases, sizes, bands } from "../../data.js";
import CaseSelection from "../../components/CaseSelection";
import SizeSelection from "../../components/SizeSelection";
import BandSelection from "../../components/BandSelection";
import WatchPreview from "../../components/WatchPreview";
import PriceDisplay from "../../components/PriceDisplay";
import "./index.css";

const CustomizationWorkflow = () => {
  const [selectedCase, setSelectedCase] = useState(cases[0]);
  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const [selectedBand, setSelectedBand] = useState(bands[0]);

  const totalPrice = selectedCase.price + selectedBand.price;

  return (
    <div className="customization-workflow">
      <WatchPreview caseData={selectedCase} size={selectedSize} band={selectedBand} />
      <CaseSelection cases={cases} onCaseSelect={setSelectedCase} />
      <SizeSelection
        sizes={sizes}
        selectedSize={selectedSize}
        onSizeSelect={setSelectedSize}
      />
      <BandSelection bands={bands} onBandSelect={setSelectedBand} />
      <PriceDisplay price={totalPrice} />
    </div>
  );
};

export default CustomizationWorkflow;