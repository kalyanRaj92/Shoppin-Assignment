import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CustomizationWorkflow from "./pages/CustomizationWorkflow";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/customize" element={<CustomizationWorkflow />} />
      </Routes>
    </Router>
  );
}

export default App;
