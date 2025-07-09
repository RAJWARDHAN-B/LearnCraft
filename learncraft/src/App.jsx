// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./pages/HeroSection";
import CompanyLogos from "./pages/CompanyLogos";
import TrainingObjectives from "./pages/TrainingObjectives";
import Blogs from "./pages/Blogs";
import PopularCourses from "./pages/PopularCourses";
import BlogDetail from "./pages/BlogsDetails";
import Authors from "./pages/Authors";
import Testimonials from "./pages/Testimonials";


// Optional placeholder components for other routes
const Courses = () => <div className="p-10 text-2xl">Courses Page</div>;
const Group = () => <div className="p-10 text-2xl">Group Page</div>;

const Home = () => (
  <div>
    <HeroSection />
    <CompanyLogos />
    <PopularCourses/>
    <Authors/>
    <Testimonials/>
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
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
