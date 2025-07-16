import React, { useState } from "react";
import { Search, CheckCircle } from "lucide-react";
import heroImage from "../assets/hero.svg";
import { Helmet } from "react-helmet-async";
import courses from '../data/courses';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [search, setSearch] = useState("");
  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(search.toLowerCase()) ||
    course.category.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <Helmet>
        <title>Learncraft Training Institute | Advance your skills</title>
        <meta name="description" content="Advance your skills with Learncraft. Build job-ready skills with our expert-led courses and mentors from world-class companies." />
        <meta property="og:title" content="Learncraft Training Institute | Advance your skills" />
        <meta property="og:description" content="Advance your skills with Learncraft. Build job-ready skills with our expert-led courses and mentors from world-class companies." />
      </Helmet>
      <div className="bg-[#f5f9ff] dark:bg-gray-900 py-12 px-6 md:px-16 transition-colors duration-300">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Promo Text */}
            <p className="flex justify-center lg:justify-start items-center gap-2 text-sm text-green-600 font-semibold mb-2">
              <CheckCircle size={16} /> Get 30% off on first enroll
            </p>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-bold text-[#1c1c3c] dark:text-white leading-tight">
              Advance your <br /> skills with us.
            </h1>

            {/* Subtext */}
            <p className="text-gray-600 dark:text-gray-300 mt-4 mb-6">
              Build skills with our courses and mentor from world-class companies.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-md mx-auto lg:mx-0 rounded-full overflow-hidden shadow-lg bg-white dark:bg-gray-800 mb-6 transition-colors duration-300">
              <input
                type="text"
                placeholder="search courses..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full px-6 py-3 text-gray-700 dark:text-gray-200 bg-transparent rounded-full focus:outline-none"
              />
              <button className="absolute right-2 top-2 bg-[#1919ec] hover:bg-blue-900 dark:bg-blue-700 dark:hover:bg-blue-900 text-white p-2 rounded-full transition-colors">
                <Search />
              </button>
            </div>
            {search && (
              <div className="max-w-md mx-auto mb-8">
                {filteredCourses.length === 0 ? (
                  <div className="text-center text-gray-500">No courses found.</div>
                ) : (
                  <div className="grid grid-cols-1 gap-4">
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

            {/* Feature Icons */}
            <div className="flex justify-center lg:justify-start gap-6 flex-wrap">
              <div className="flex items-center gap-2">
                <span className="text-[#4a90e2] dark:text-blue-400">✔️</span> Flexible
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#4a90e2]">✔️</span> Learning path
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#4a90e2]">✔️</span> Community
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center">
            <img
              src={heroImage}
              alt="hero"
              className="max-w-full w-[400px] sm:w-[500px] md:w-[600px]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
