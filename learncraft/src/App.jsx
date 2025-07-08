// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./pages/HeroSection";
import CompanyLogos from "./pages/CompanyLogos";

function App() {
  return (
    <div>
      <Navbar />
      {/* Other components/pages go here */}
      <HeroSection />
      <CompanyLogos/>
    </div>
  );
}

export default App;
