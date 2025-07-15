import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CheckCircle, Menu } from "lucide-react";
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

const STORAGE_KEY = "learncraft_watched_videos";

const CourseDetail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [selectedIdx, setSelectedIdx] = useState(0);
  const [watched, setWatched] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const DEFAULT_IMAGE = "https://farm3.staticflickr.com/2936/14765026726_b8a02d3989.jpg";
  const course = courseData[id];

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 700);
    return () => clearTimeout(timer);
  }, [id]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    setWatched(data[id] || []);
  }, [id]);

  useEffect(() => {
    if (!course) return;
    setWatched((prev) => {
      if (prev.includes(selectedIdx)) return prev;
      const updated = [...prev, selectedIdx];
      const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
      data[id] = updated;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      return updated;
    });
  }, [selectedIdx, id, course]);

  if (loading) return <Loader />;
  if (!course) return <div className="p-10 text-xl">Course not found.</div>;

  const progress = Math.round((watched.length / course.courseList.length) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900 flex flex-col md:flex-row">
      {/* Sidebar (collapsible on mobile) */}
      <button
        className="md:hidden fixed top-20 left-4 z-30 bg-blue-600 text-white p-2 rounded-full shadow-lg focus:outline-none"
        onClick={() => setSidebarOpen((open) => !open)}
        aria-label="Toggle sidebar"
      >
        <Menu size={24} />
      </button>
      <aside
        className={`fixed md:static top-0 left-0 h-full md:h-auto w-72 md:w-80 bg-white/90 dark:bg-gray-800/90 border-r border-gray-200 dark:border-gray-700 p-4 md:p-8 flex-shrink-0 shadow-md md:rounded-tr-3xl md:rounded-br-3xl z-20 transition-transform duration-300 md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
        style={{ maxHeight: '100vh', overflowY: 'auto' }}
      >
        <h2 className="text-xl font-bold mb-6 text-blue-800 dark:text-yellow-300 tracking-tight">Course Content</h2>
        {/* Progress Bar */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-1 text-xs font-semibold text-blue-700 dark:text-yellow-300">
            <span>Progress</span>
            <span>{progress}%</span>
          </div>
          <div className="w-full h-2 bg-blue-100 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-2 bg-blue-500 dark:bg-yellow-400 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
        <ul className="space-y-2">
          {course.courseList.map((c, idx) => (
            <li
              key={idx}
              className={`rounded-lg px-4 py-3 cursor-pointer flex items-center justify-between transition font-medium text-sm md:text-base
                ${selectedIdx === idx ? "bg-blue-600 dark:bg-yellow-400 text-white dark:text-gray-900 shadow-lg" : "hover:bg-blue-100 dark:hover:bg-gray-700 text-blue-900 dark:text-gray-200"}`}
              onClick={() => {
                setSelectedIdx(idx);
                setSidebarOpen(false);
              }}
              style={{ boxShadow: selectedIdx === idx ? '0 2px 12px 0 rgba(59,130,246,0.15)' : undefined }}
            >
              <span className="truncate max-w-[140px] flex items-center gap-2">
                {c.name}
                {watched.includes(idx) && <CheckCircle size={16} className="text-green-500" />}
              </span>
              <span className="text-xs text-blue-200 dark:text-yellow-300 ml-2">{c.hours} hrs</span>
            </li>
          ))}
        </ul>
      </aside>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-10 md:hidden"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close sidebar"
        ></div>
      )}

      {/* Main Content */}
      <main className="flex-1 p-2 sm:p-4 md:p-10 flex flex-col items-center">
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
            className="w-full h-full min-h-[180px] sm:min-h-[220px] md:min-h-[400px]"
            style={{ borderRadius: '1.5rem' }}
          ></iframe>
        </div>
        <div className="w-full max-w-4xl bg-white/90 dark:bg-gray-800/90 rounded-2xl shadow p-4 sm:p-6 mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-lg sm:text-xl font-semibold mb-1 text-blue-800 dark:text-yellow-300">{course.courseList[selectedIdx].name}</h2>
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
          <div className="bg-gradient-to-r from-blue-100 to-blue-200 dark:from-gray-800 dark:to-gray-900 mt-4 p-4 sm:p-6 rounded-2xl text-center text-md sm:text-lg font-semibold text-blue-900 dark:text-yellow-200 shadow">
            Median salary: <span className="font-bold">{course.salary}</span> &nbsp;|&nbsp; Job Openings: <span className="font-bold">{course.jobs}</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CourseDetail;
