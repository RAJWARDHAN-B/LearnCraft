// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
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
import { AnimatePresence, motion } from "framer-motion";
import BlogPost from "./pages/BlogPost";

// Placeholder component for future implementation
const Group = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="text-center">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Group Page</h1>
      <p className="text-gray-600">This page is under development.</p>
    </div>
  </div>
);

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
        <Route path="/my-learning" element={
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
            <MyLearning />
          </motion.div>
        } />
        <Route path="/authors" element={
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
            <Authors />
          </motion.div>
        } />
        <Route path="/group" element={
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
            <Group />
          </motion.div>
        } />
        <Route path="/testimonials" element={
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
            <Testimonials />
          </motion.div>
        } />
        <Route path="/blog" element={
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
            <Blogs />
          </motion.div>
        } />
        <Route path="/blog/:id" element={
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
            <BlogDetail />
          </motion.div>
        } />
        <Route path="/courses/:id" element={
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
            <CourseDetail />
          </motion.div>
        } />
        <Route path="/category/:categoryName" element={
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
            <CategoryCourses />
          </motion.div>
        } />
        <Route path="/vij" element={
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
            <BlogPost />
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Router>
        <Navbar />
        <AnimatedRoutes />
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
