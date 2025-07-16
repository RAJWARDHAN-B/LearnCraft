import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, BarChart2, Megaphone, Building2, Code2, DollarSign, Palette } from "lucide-react";
import PopularCourses from "./PopularCourses";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import courses from '../data/courses';
import { Link } from 'react-router-dom';

const categories = [
  { name: "Data Science", icon: <BarChart2 size={32} className="text-blue-600" /> },
  { name: "Digital Marketing", icon: <Megaphone size={32} className="text-pink-500" /> },
  { name: "Civil Engineering", icon: <Building2 size={32} className="text-yellow-600" /> },
  { name: "Programming", icon: <Code2 size={32} className="text-green-600" /> },
  { name: "Finance", icon: <DollarSign size={32} className="text-emerald-600" /> },
  { name: "Design", icon: <Palette size={32} className="text-purple-600" /> },
];

const slugify = (str) => str.toLowerCase().replace(/ /g, "-");

const Explore = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(search.toLowerCase()) ||
    course.category.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <Helmet>
        <title>Explore Courses | Learncraft</title>
        <meta name="description" content="Explore and search for top courses by category, popularity, and more on Learncraft. Find your next learning path!" />
        <meta property="og:title" content="Explore Courses | Learncraft" />
        <meta property="og:description" content="Explore and search for top courses by category, popularity, and more on Learncraft. Find your next learning path!" />
      </Helmet>
      <div className="min-h-screen bg-[#f5f9ff] dark:bg-gray-900 pb-12 transition-colors duration-300">
      {/* Hero/Search Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto pt-8 sm:pt-12 px-2 sm:px-4 text-center"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1c1c3c] dark:text-yellow-200 mb-4">
          Explore Courses
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg">
          Find the perfect course to boost your career. Search, browse categories, or check out what's trending!
        </p>
        <div className="relative max-w-xl mx-auto rounded-full overflow-hidden shadow-lg bg-white dark:bg-gray-800 mb-6">
          <input
            type="text"
            placeholder="Search courses, categories..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full px-4 sm:px-6 py-3 text-gray-700 dark:text-gray-100 dark:bg-gray-900 rounded-full focus:outline-none text-sm sm:text-base"
          />
          <button className="absolute right-2 top-2 bg-[#1919ec] dark:bg-yellow-400 hover:bg-blue-900 dark:hover:bg-yellow-500 text-white dark:text-gray-900 p-2 rounded-full">
            <Search />
          </button>
        </div>
      </motion.div>
      {search && (
        <div className="max-w-2xl mx-auto mb-8">
          {filteredCourses.length === 0 ? (
            <div className="text-center text-gray-500">No courses found.</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredCourses.map(course => (
                <Link
                  to={`/courses/${course.id}`}
                  key={course.id}
                  className="group bg-white rounded-2xl overflow-hidden relative transition duration-300 hover:scale-[1.02] hover:shadow-xl border-2 hover:border-indigo-500 p-2"
                >
                  <div className="relative">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-36 object-cover transition-all duration-200"
                      loading="lazy"
                    />
                    {course.bestSeller && (
                      <span className="absolute bottom-2 right-2 bg-indigo-700 text-white text-xs px-2 py-1 rounded-full font-semibold">
                        BEST SELLER
                      </span>
                    )}
                  </div>
                  <div className="p-3">
                    <h3 className="text-base font-semibold">{course.title}</h3>
                    <p className="text-xs text-gray-500 mb-2">{course.author}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Popular Courses Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-7xl mx-auto px-2 sm:px-4 mt-8 sm:mt-12"
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-yellow-200">Popular Courses</h2>
        <PopularCourses />
      </motion.div>

      {/* Categories Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-7xl mx-auto px-2 sm:px-4 mt-10 sm:mt-16"
      >
        <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-yellow-200">Categories</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 sm:gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              whileHover={{ scale: 1.08 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 sm:p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-blue-50 dark:hover:bg-gray-700 transition"
              onClick={() => navigate(`/category/${slugify(cat.name)}`)}
              role="button"
              tabIndex={0}
            >
              <span className="mb-2">{cat.icon}</span>
              <span className="font-semibold text-gray-800 dark:text-yellow-200 text-center text-xs sm:text-sm">{cat.name}</span>
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
        className="max-w-3xl mx-auto px-2 sm:px-4 mt-12 sm:mt-20 text-center"
      >
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-yellow-400 dark:to-yellow-600 rounded-2xl p-6 sm:p-8 text-white dark:text-gray-900 shadow-lg">
          <h3 className="text-lg sm:text-2xl font-bold mb-2">Not sure where to start?</h3>
          <p className="mb-4 text-sm sm:text-base">Browse our curated learning paths or talk to a mentor to get personalized recommendations!</p>
          <button className="bg-white dark:bg-gray-900 text-blue-700 dark:text-yellow-400 font-semibold px-4 sm:px-6 py-2 rounded-full shadow hover:bg-blue-50 dark:hover:bg-gray-800 transition text-sm sm:text-base">
            Get Guidance
          </button>
        </div>
      </motion.div>
    </div>
    </>
  );
};

export default Explore; 