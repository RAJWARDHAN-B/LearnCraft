import React, { useState } from "react";
import { motion } from "framer-motion";
import { Search, BarChart2, Megaphone, Building2, GraduationCap, Star, Users, Clock } from "lucide-react";
import PopularCourses from "./PopularCourses";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import courses from '../data/courses';
import { Link } from 'react-router-dom';

const categories = [
  { 
    name: "Data Science", 
    icon: <BarChart2 size={32} className="text-blue-600" />,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200"
  },
  { 
    name: "Digital Marketing", 
    icon: <Megaphone size={32} className="text-pink-500" />,
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200"
  },
  { 
    name: "Civil Engineering", 
    icon: <Building2 size={32} className="text-yellow-600" />,
    color: "from-yellow-500 to-yellow-600",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200"
  },
  { 
    name: "Rural Courses", 
    icon: <GraduationCap size={32} className="text-green-600" />,
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200"
  },
];

const slugify = (str) => str.toLowerCase().replace(/ /g, "-");

const PAGE_SIZE = 8;

const Explore = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  
  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(search.toLowerCase()) ||
    course.category.toLowerCase().includes(search.toLowerCase())
  );

  const getCoursesByCategory = (categoryName) => {
    if (categoryName === "all") return courses;
    const categorySlug = slugify(categoryName);
    return courses.filter(course => course.category === categorySlug);
  };

  const CourseCard = ({ course }) => (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
    >
      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        {course.bestSeller && (
          <span className="absolute top-3 left-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
            BEST SELLER
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
          {course.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
          {course.author}
        </p>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-1">
            <Star size={14} className="text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600 dark:text-gray-300">
              {course.rating} ({course.reviews})
            </span>
          </div>
          <div className="flex items-center space-x-1 text-gray-500">
            <Users size={14} />
            <span className="text-sm">{course.students}</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 text-gray-500">
            <Clock size={14} />
            <span className="text-sm">{course.classes} classes</span>
          </div>
          <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-600 hover:to-indigo-700 transition-all duration-200">
            Enroll Now
          </button>
        </div>
      </div>
    </motion.div>
  );

  const CategoryRow = ({ category }) => {
    const categoryCourses = getCoursesByCategory(category.name);
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`mb-12 ${category.bgColor} dark:bg-gray-800 rounded-2xl p-6 border ${category.borderColor} dark:border-gray-700`}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white`}>
              {category.icon}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {category.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                {categoryCourses.length} courses available
              </p>
            </div>
          </div>
          <button 
            onClick={() => navigate(`/category/${slugify(category.name)}`)}
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-semibold text-sm"
          >
            View All →
          </button>
        </div>
        
        {categoryCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categoryCourses.map((course) => (
              <Link key={course.id} to={`/courses/${course.id}`}>
                <CourseCard course={course} />
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500 dark:text-gray-400">No courses available in this category yet.</p>
          </div>
        )}
      </motion.div>
    );
  };

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

        {/* Search Results */}
        {search && (
          <div className="max-w-7xl mx-auto px-2 sm:px-4 mb-8">
            {filteredCourses.length === 0 ? (
              <div className="text-center text-gray-500 dark:text-gray-400 py-8">
                <p className="text-lg">No courses found matching your search.</p>
                <p className="text-sm mt-2">Try different keywords or browse our categories below.</p>
              </div>
            ) : (
              <div className="mb-8">
                <h2 className="text-xl sm:text-2xl font-bold mb-6 text-gray-900 dark:text-yellow-200">
                  Search Results ({filteredCourses.length})
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredCourses.slice(0, visibleCount).map(course => (
                    <Link key={course.id} to={`/courses/${course.id}`}>
                      <CourseCard course={course} />
                    </Link>
                  ))}
                </div>
                {visibleCount < filteredCourses.length && (
                  <div className="flex justify-center mt-6">
                    <button
                      onClick={() => setVisibleCount(visibleCount + PAGE_SIZE)}
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
                    >
                      Show More
                    </button>
                  </div>
                )}
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

        {/* Categories with Courses */}
        <div className="max-w-7xl mx-auto px-2 sm:px-4 mt-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900 dark:text-yellow-200 text-center">
            Browse by Category
          </h2>
          
          {categories.map((category, index) => (
            <CategoryRow key={category.name} category={category} />
          ))}
        </div>

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
            <button 
              onClick={() => navigate("/about#contact")}
              className="bg-white dark:bg-gray-900 text-blue-700 dark:text-yellow-400 font-semibold px-4 sm:px-6 py-2 rounded-full shadow hover:bg-blue-50 dark:hover:bg-gray-800 transition text-sm sm:text-base"
            >
              Get Guidance
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Explore; 