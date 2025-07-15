import React from "react";
import { motion } from "framer-motion";
import { Search, BarChart2, Megaphone, Building2, Code2, DollarSign, Palette } from "lucide-react";
import PopularCourses from "./PopularCourses";

const categories = [
  { name: "Data Science", icon: <BarChart2 size={32} className="text-blue-600" /> },
  { name: "Digital Marketing", icon: <Megaphone size={32} className="text-pink-500" /> },
  { name: "Civil Engineering", icon: <Building2 size={32} className="text-yellow-600" /> },
  { name: "Programming", icon: <Code2 size={32} className="text-green-600" /> },
  { name: "Finance", icon: <DollarSign size={32} className="text-emerald-600" /> },
  { name: "Design", icon: <Palette size={32} className="text-purple-600" /> },
];

const Explore = () => {
  return (
    <div className="min-h-screen bg-[#f5f9ff] pb-12">
      {/* Hero/Search Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto pt-12 px-4 text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#1c1c3c] mb-4">
          Explore Courses
        </h1>
        <p className="text-gray-600 mb-8 text-lg">
          Find the perfect course to boost your career. Search, browse categories, or check out what's trending!
        </p>
        <div className="relative max-w-xl mx-auto rounded-full overflow-hidden shadow-lg bg-white mb-6">
          <input
            type="text"
            placeholder="Search courses, categories..."
            className="w-full px-6 py-3 text-gray-700 rounded-full focus:outline-none"
          />
          <button className="absolute right-2 top-2 bg-[#1919ec] hover:bg-blue-900 text-white p-2 rounded-full">
            <Search />
          </button>
        </div>
      </motion.div>

      {/* Popular Courses Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-7xl mx-auto px-4 mt-12"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Popular Courses</h2>
        <PopularCourses />
      </motion.div>

      {/* Categories Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-7xl mx-auto px-4 mt-16"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              whileHover={{ scale: 1.08 }}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-blue-50 transition"
            >
              <span className="mb-2">{cat.icon}</span>
              <span className="font-semibold text-gray-800 text-center text-sm">{cat.name}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to Action Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="max-w-3xl mx-auto px-4 mt-20 text-center"
      >
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 text-white shadow-lg">
          <h3 className="text-2xl font-bold mb-2">Not sure where to start?</h3>
          <p className="mb-4">Browse our curated learning paths or talk to a mentor to get personalized recommendations!</p>
          <button className="bg-white text-blue-700 font-semibold px-6 py-2 rounded-full shadow hover:bg-blue-50 transition">
            Get Guidance
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Explore; 