import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Loader from "../components/Loader";
import { Book, Users } from "lucide-react";
import dataScience from "../assets/data-science.jpg";
import digitalMarketing from "../assets/digital-marketing.jpg";
import civilEngineering from "../assets/civil-engineering.jpg";
import { Helmet } from "react-helmet-async";
import courses from '../data/courses';

const DEFAULT_IMAGE = "https://farm3.staticflickr.com/2936/14765026726_b8a02d3989.jpg";

const unslugify = (slug) => slug.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());

// Helper to get course progress from localStorage
const STORAGE_KEY = "learncraft_watched_videos";
const COURSE_TOPICS = {
  1: 6, // Data Science (from CourseDetail)
  2: 6, // Digital Marketing (assume same for demo)
  3: 6, // Civil Engineering (assume same for demo)
};
function getCourseProgress(courseId) {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  const watched = data[courseId] || [];
  const total = COURSE_TOPICS[courseId] || 1;
  const percent = Math.round((watched.length / total) * 100);
  return { percent, completed: watched.length === total };
}

const CategoryCourses = () => {
  const { categoryName } = useParams();
  const [loading, setLoading] = useState(true);
  const filteredCourses = courses.filter(
    (course) => course.category === categoryName
  );
  const readableCategory = unslugify(categoryName);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, [categoryName]);

  if (loading) return <Loader />;

  return (
    <>
      <Helmet>
        <title>{readableCategory} Courses | Learncraft</title>
        <meta name="description" content={`Explore the best ${readableCategory} courses on Learncraft. Find top-rated courses and boost your career today!`} />
        <meta property="og:title" content={`${readableCategory} Courses | Learncraft`} />
        <meta property="og:description" content={`Explore the best ${readableCategory} courses on Learncraft. Find top-rated courses and boost your career today!`} />
      </Helmet>
      <div className="min-h-screen bg-[#f5f9ff] py-8 sm:py-12 px-2 sm:px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            {unslugify(categoryName)} Courses
          </h1>
          {filteredCourses.length === 0 ? (
            <div className="text-center text-lg text-gray-500">No courses found in this category.</div>
          ) : (
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 md:gap-8">
              {filteredCourses.map((course) => {
                const { percent, completed } = getCourseProgress(course.id);
                return (
                  <Link
                    to={`/courses/${course.id}`}
                    key={course.id}
                    className="group bg-white rounded-2xl overflow-hidden relative transition duration-300 hover:scale-[1.02] hover:shadow-xl border-2 hover:border-indigo-500 p-2 sm:p-0"
                  >
                    <div className="relative">
                      <img
                        src={DEFAULT_IMAGE}
                        alt={course.title}
                        className="w-full h-36 xs:h-40 sm:h-48 object-cover transition-all duration-200"
                        loading="lazy"
                      />
                      {course.bestSeller && (
                        <span className="absolute bottom-2 right-2 bg-indigo-700 text-white text-xs px-2 sm:px-3 py-1 rounded-full font-semibold">
                          BEST SELLER
                        </span>
                      )}
                      {completed && (
                        <span className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full font-semibold shadow">COMPLETED</span>
                      )}
                    </div>
                    <div className="p-2 xs:p-3 sm:p-5">
                      <h3 className="text-sm xs:text-base sm:text-lg font-semibold">{course.title}</h3>
                      <p className="text-xs sm:text-sm text-gray-500 mb-2">{course.author}</p>
                      {/* Progress Bar */}
                      <div className="mb-2">
                        <div className="w-full h-2 bg-blue-100 rounded-full overflow-hidden">
                          <div
                            className="h-2 bg-blue-500 rounded-full transition-all duration-300"
                            style={{ width: `${percent}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-right text-blue-700 mt-1">{percent}%</div>
                      </div>
                      <div className="flex items-center justify-between mb-2 sm:mb-4">
                        <div className="flex items-center gap-1 text-xs sm:text-sm">
                          <span className="text-red-600 font-semibold">{course.rating}</span>
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={`text-yellow-400 ${i < Math.round(course.reviews) ? "opacity-100" : "opacity-40"}`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                        <p className="text-xs sm:text-md font-semibold text-gray-800">${course.price}</p>
                      </div>
                      <div className="border-t pt-2 sm:pt-3 flex justify-between text-xs sm:text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Book size={14} className="sm:w-4 sm:h-4" />
                          {course.classes} classes
                        </div>
                        <div className="flex items-center gap-1">
                          <Users size={14} className="sm:w-4 sm:h-4" />
                          {course.students} students
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CategoryCourses; 