import React from "react";

import { Link } from "react-router-dom";
import "./index.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to Apple Watch Studio</h1>
      <Link to="/customize" className="start-button">
        Start Customizing
      </Link>
    </div>
  );
};

export default LandingPage;