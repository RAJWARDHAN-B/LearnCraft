// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./pages/HeroSection";
import CompanyLogos from "./pages/CompanyLogos";
import TrainingSection from "./pages/TrainingSection";
import Blogs from "./pages/Blogs";
import PopularCourses from "./pages/PopularCourses";
import Authors from "./pages/Authors";
import Testimonials from "./pages/Testimonials";
import Footer from "./components/Footer";
import CourseDetail from "./pages/CourseDetail";
import MyLearning from "./pages/MyLearning";
import Explore from "./pages/Explore";
import CategoryCourses from "./pages/CategoryCourses";
import { AnimatePresence, motion } from "framer-motion";
import BlogPost from "./pages/BlogPost";

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

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
            <Home />
          </motion.div>
        } />
        <Route path="/explore" element={
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
            <Explore />
          </motion.div>
        } />
        <Route path="/my-learning" element={<MyLearning />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/group" element={<Group />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/category/:categoryName" element={<CategoryCourses />} />
        <Route path="/vij" element={<BlogPost />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Router>
        <Navbar />
        <AnimatedRoutes />
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
