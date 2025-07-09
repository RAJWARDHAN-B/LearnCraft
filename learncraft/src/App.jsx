// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./pages/HeroSection";
import CompanyLogos from "./pages/CompanyLogos";
import TrainingObjectives from "./pages/TrainingObjectives";
import PopularCourses from "./pages/PopularCourses";

function App() {
  return (
    <div>
      <Navbar />
      {/* Other components/pages go here */}
      <HeroSection />
      <CompanyLogos/>
      <PopularCourses/>
      <TrainingObjectives/>
    </div>
  );
}

export default App;


// WE LOVE https://www.svgrepo.com/