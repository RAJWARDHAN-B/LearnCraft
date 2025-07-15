import React from "react";
import { Search, CheckCircle } from "lucide-react";
import heroImage from "../assets/hero.svg";
import { Helmet } from "react-helmet-async";

const HeroSection = () => {
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
                className="w-full px-6 py-3 text-gray-700 dark:text-gray-200 bg-transparent rounded-full focus:outline-none"
              />
              <button className="absolute right-2 top-2 bg-[#1919ec] hover:bg-blue-900 dark:bg-blue-700 dark:hover:bg-blue-900 text-white p-2 rounded-full transition-colors">
                <Search />
              </button>
            </div>

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
