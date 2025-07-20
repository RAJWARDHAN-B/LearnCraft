import React, { useState, useEffect, useRef } from "react";
import { Book, Users, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import dataScience from "../assets/data-science.jpg";
import digitalMarketing from "../assets/digital-marketing.jpg";
import civilEngineering from "../assets/civil-engineering.jpg";
import { Helmet } from "react-helmet-async";
import courses from '../data/courses';

const DEFAULT_IMAGE = "https://farm3.staticflickr.com/2936/14765026726_b8a02d3989.jpg";

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

const PopularCourses = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);
  const cardWidth = 304; // 280px card + 24px gap
  const totalCards = courses.slice(0, 6).length;

  const scrollToIndex = (index) => {
    if (scrollContainerRef.current) {
      const scrollPosition = index * cardWidth;
      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const nextSlide = () => {
    const nextIndex = Math.min(currentIndex + 1, totalCards - 1);
    setCurrentIndex(nextIndex);
    scrollToIndex(nextIndex);
  };

  const prevSlide = () => {
    const prevIndex = Math.max(currentIndex - 1, 0);
    setCurrentIndex(prevIndex);
    scrollToIndex(prevIndex);
  };

  // Auto-scroll every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex >= totalCards - 1) {
        setCurrentIndex(0);
        scrollToIndex(0);
      } else {
        nextSlide();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, totalCards]);

  return (
    <>
      <Helmet>
        <title>Popular Courses | Learncraft</title>
        <meta name="description" content="Browse the most popular courses on Learncraft. Find top-rated courses in Data Science, Digital Marketing, Civil Engineering, and more." />
        <meta property="og:title" content="Popular Courses | Learncraft" />
        <meta property="og:description" content="Browse the most popular courses on Learncraft. Find top-rated courses in Data Science, Digital Marketing, Civil Engineering, and more." />
      </Helmet>
      <div className="py-8 sm:py-12 px-2 sm:px-4 md:px-16 bg-white relative">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-10 text-center">
          Popular courses.
        </h2>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 hover:text-blue-600 p-2 rounded-full shadow-lg border border-gray-200 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ left: '-10px' }}
          >
            <ChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextSlide}
            disabled={currentIndex >= totalCards - 1}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 hover:text-blue-600 p-2 rounded-full shadow-lg border border-gray-200 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ right: '-10px' }}
          >
            <ChevronRight size={24} />
          </button>

          <div className="overflow-x-auto" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div 
              ref={scrollContainerRef}
              className="flex gap-4 sm:gap-6 md:gap-8 pb-4 transition-all duration-300"
              style={{ minWidth: 'max-content' }}
            >
              {courses.slice(0, 6).map((course) => {
                const { percent, completed } = getCourseProgress(course.id);
                return (
                  <Link
                    to={`/courses/${course.id}`}
                    key={course.id}
                    className={`group bg-white rounded-2xl overflow-hidden relative transition duration-300 hover:scale-[1.02] hover:shadow-xl border-2 hover:border-indigo-500 p-2 sm:p-0 flex-shrink-0`}
                    style={{ width: '280px' }}
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
                      {/* Rating */}
                      <div className="flex items-center justify-between mb-2 sm:mb-4">
                        <div className="flex items-center gap-1 text-xs sm:text-sm">
                          <span className="text-red-600 font-semibold">{course.rating}</span>
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className={`text-yellow-400 ${
                                i < Math.round(course.reviews) ? "opacity-100" : "opacity-40"
                              }`}
                            >
                              ★
                            </span>
                          ))}
                        </div>
                        <p className="text-xs sm:text-md font-semibold text-gray-800">${course.price}</p>
                      </div>
                      {/* Stats */}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularCourses;
