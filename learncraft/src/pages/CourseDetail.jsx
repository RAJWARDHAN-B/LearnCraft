import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";

const courseData = {
  1: {
    title: "Data Science Certificate",
    description: "Build job-ready AI & Data Science skills...",
    rating: 4.6,
    reviews: 79910,
    level: "Beginner",
    duration: "3 weeks",
    startDate: "Starts Jul 2",
    skills: [
      "SQL", "Plotly", "Data Wrangling", "Feature Engineering", "EDA",
      "Unsupervised Learning", "Matplotlib", "Pandas", "Generative AI"
    ],
    salary: "$144,256",
    jobs: "52,582",
    courseList: [
      { name: "What is Data Science?", hours: "11" },
      { name: "Tools for Data Science", hours: "18" },
      { name: "Data Science Methodology", hours: "6" },
      { name: "Python for Data Science", hours: "25" },
      { name: "Python Project for Data Science", hours: "8" },
      { name: "SQL with Python", hours: "18" }
    ],
    image: "/images/data-science-banner.jpg"
  },
  // add more course details here
};

const YOUTUBE_PLACEHOLDER = "https://www.youtube.com/embed/dQw4w9WgXcQ?si=czLfRnLSX70mDgAr";

const CourseDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const DEFAULT_IMAGE = "https://farm3.staticflickr.com/2936/14765026726_b8a02d3989.jpg";
  const course = courseData[id];

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, [id]);

  if (loading) return <Loader />;
  if (!course) return <div className="p-10 text-xl">Course not found.</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-80 bg-white/90 dark:bg-gray-800/90 border-r border-gray-200 dark:border-gray-700 p-4 md:p-8 flex-shrink-0 shadow-md md:rounded-tr-3xl md:rounded-br-3xl">
        <h2 className="text-xl font-bold mb-6 text-blue-800 dark:text-yellow-300 tracking-tight">Course Content</h2>
        <ul className="space-y-2">
          {course.courseList.map((c, idx) => (
            <li
              key={idx}
              className={`rounded-lg px-4 py-3 cursor-pointer flex items-center justify-between transition font-medium text-sm md:text-base
                ${selectedIdx === idx ? "bg-blue-600 dark:bg-yellow-400 text-white dark:text-gray-900 shadow-lg" : "hover:bg-blue-100 dark:hover:bg-gray-700 text-blue-900 dark:text-gray-200"}`}
              onClick={() => setSelectedIdx(idx)}
              style={{ boxShadow: selectedIdx === idx ? '0 2px 12px 0 rgba(59,130,246,0.15)' : undefined }}
            >
              <span className="truncate max-w-[140px]">{c.name}</span>
              <span className="text-xs text-blue-200 dark:text-yellow-300 ml-2">{c.hours} hrs</span>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-10 flex flex-col items-center">
        <div className="w-full max-w-4xl">
          {/* Removed the top card section with image, title, description, and info cards */}
        </div>
        {/* Video Player */}
        <div className="w-full max-w-4xl aspect-w-16 aspect-h-9 mb-6 rounded-3xl overflow-hidden shadow-2xl bg-black border-4 border-blue-200 dark:border-yellow-400">
          <iframe
            src={YOUTUBE_PLACEHOLDER}
            title={course.courseList[selectedIdx].name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full min-h-[220px] md:min-h-[400px]"
            style={{ borderRadius: '1.5rem' }}
          ></iframe>
        </div>
        <div className="w-full max-w-4xl bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow p-6 mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-xl font-semibold mb-1 text-blue-800 dark:text-yellow-300">{course.courseList[selectedIdx].name}</h2>
            <span className="text-blue-500 dark:text-yellow-300 text-sm">{course.courseList[selectedIdx].hours} hrs</span>
          </div>
          <div className="mt-4 md:mt-0 flex flex-wrap gap-2">
            {course.skills.map(skill => (
              <span key={skill} className="bg-blue-100 dark:bg-gray-700 text-blue-700 dark:text-yellow-200 px-3 py-1 rounded-full text-xs font-medium shadow-sm">{skill}</span>
            ))}
          </div>
        </div>
        {/* Salary Section */}
        <div className="w-full max-w-4xl">
          <div className="bg-gradient-to-r from-blue-100 to-blue-200 dark:from-gray-800 dark:to-gray-900 mt-4 p-6 rounded-2xl text-center text-lg font-semibold text-blue-900 dark:text-yellow-200 shadow">
            Median salary: <span className="font-bold">{course.salary}</span> &nbsp;|&nbsp; Job Openings: <span className="font-bold">{course.jobs}</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CourseDetail;
