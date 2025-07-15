// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./pages/HeroSection";
import CompanyLogos from "./pages/CompanyLogos";
import TrainingSection from "./pages/TrainingSection";
import Blogs from "./pages/Blogs";
import PopularCourses from "./pages/PopularCourses";
import BlogDetail from "./pages/BlogsDetails";
import Authors from "./pages/Authors";
import Testimonials from "./pages/Testimonials";
import Footer from "./components/Footer";
import CourseDetail from "./pages/CourseDetail";
import MyLearning from "./pages/MyLearning";
import Explore from "./pages/Explore";
import CategoryCourses from "./pages/CategoryCourses";

// Optional placeholder components for other routes
const Group = () => <div className="p-10 text-2xl">Group Page</div>;

const Home = () => (
  <div>
    <HeroSection />
    <CompanyLogos />
    <PopularCourses />
    <TrainingSection />
    <div id="authors"><Authors /></div>
    <div id="testimonials"><Testimonials /></div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/my-learning" element={<MyLearning />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/group" element={<Group />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
          <Route path="/category/:categoryName" element={<CategoryCourses />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
