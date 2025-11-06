import React from "react";
import { motion } from "framer-motion";
import { BarChart2, Megaphone, Building2, GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const categories = [
  { 
    name: "Data Science", 
    icon: <BarChart2 size={32} className="text-blue-600" />,
    slug: "data-science"
  },
  { 
    name: "Digital Marketing", 
    icon: <Megaphone size={32} className="text-pink-500" />,
    slug: "digital-marketing"
  },
  { 
    name: "Civil Engineering", 
    icon: <Building2 size={32} className="text-yellow-600" />,
    slug: "civil-engineering"
  },
  { 
    name: "Rural Courses", 
    icon: <GraduationCap size={32} className="text-green-600" />,
    slug: "rural"
  },
];

const slugify = (str) => str.toLowerCase().replace(/ /g, "-");

const Categories = () => {
  const navigate = useNavigate();

  return (
    <div className="categories py-8 sm:py-12 px-2 sm:px-4 md:px-16 bg-white dark:bg-gray-900">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-yellow-200 mb-6 sm:mb-10 text-center">
        📚 Browse Categories
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-4xl mx-auto">
        {categories.map((cat) => (
          <motion.div
            key={cat.name}
            whileHover={{ scale: 1.08, y: -5 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 sm:p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-blue-50 dark:hover:bg-gray-700 hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-indigo-300"
            onClick={() => navigate(`/category/${cat.slug}`)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                navigate(`/category/${cat.slug}`);
              }
            }}
          >
            <span className="mb-2">{cat.icon}</span>
            <span className="font-semibold text-gray-800 dark:text-yellow-200 text-center text-xs sm:text-sm md:text-base">
              {cat.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Categories;

