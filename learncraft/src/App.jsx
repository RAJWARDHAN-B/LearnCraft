// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./pages/HeroSection";
import CompanyLogos from "./pages/CompanyLogos";
import TrainingObjectives from "./pages/TrainingObjectives";
import Blogs from "./pages/Blogs";

// Optional placeholder components for other routes
const Courses = () => <div className="p-10 text-2xl">Courses Page</div>;
const Authors = () => <div className="p-10 text-2xl">Authors Page</div>;
const Group = () => <div className="p-10 text-2xl">Group Page</div>;
const Testimonial = () => <div className="p-10 text-2xl">Testimonial Page</div>;

const Home = () => (
  <div>
    <HeroSection />
    <CompanyLogos />
    <TrainingObjectives />
  </div>
);

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/group" element={<Group />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/blog" element={<Blogs />} />
      </Routes>
    </Router>
  );
}

export default App;
