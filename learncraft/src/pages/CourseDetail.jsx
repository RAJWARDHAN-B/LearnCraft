import React, { useState } from "react";
import { useParams } from "react-router-dom";

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
  const course = courseData[id];
  const [selectedIdx, setSelectedIdx] = useState(0);
  const DEFAULT_IMAGE = "https://farm3.staticflickr.com/2936/14765026726_b8a02d3989.jpg";

  if (!course) return <div className="p-10 text-xl">Course not found.</div>;

  return (
    <div className="min-h-screen bg-[#f5f9ff] flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-80 bg-white border-r border-gray-200 p-4 md:p-6 flex-shrink-0">
        <h2 className="text-xl font-bold mb-6 text-gray-800">Course Content</h2>
        <ul className="space-y-2">
          {course.courseList.map((c, idx) => (
            <li
              key={idx}
              className={`rounded-lg px-4 py-3 cursor-pointer flex items-center justify-between transition font-medium text-sm md:text-base
                ${selectedIdx === idx ? "bg-blue-100 text-blue-700" : "hover:bg-gray-100 text-gray-700"}`}
              onClick={() => setSelectedIdx(idx)}
            >
              <span>{c.name}</span>
              <span className="text-xs text-gray-400 ml-2">{c.hours} hrs</span>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-10 flex flex-col items-center">
        <div className="w-full max-w-4xl">
          <img src={DEFAULT_IMAGE} alt={course.title} className="w-full h-48 object-cover rounded-xl mb-4 hidden md:block" />
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{course.title}</h1>
          <p className="text-gray-600 mb-4">{course.description}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-gray-100 p-4 rounded-xl mb-6 text-center text-sm">
            <div><strong>Level:</strong><br />{course.level}</div>
            <div><strong>Rating:</strong><br />{course.rating} ({course.reviews} reviews)</div>
            <div><strong>Duration:</strong><br />{course.duration}</div>
            <div><strong>Next Batch:</strong><br />{course.startDate}</div>
          </div>
        </div>
        {/* Video Player */}
        <div className="w-full max-w-4xl aspect-w-16 aspect-h-9 mb-6 rounded-xl overflow-hidden shadow-lg bg-black">
          <iframe
            src={YOUTUBE_PLACEHOLDER}
            title={course.courseList[selectedIdx].name}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full min-h-[220px] md:min-h-[400px]"
          ></iframe>
        </div>
        <div className="w-full max-w-4xl bg-white rounded-xl shadow p-6 mb-8">
          <h2 className="text-xl font-semibold mb-2">{course.courseList[selectedIdx].name}</h2>
          <span className="text-gray-500 text-sm">{course.courseList[selectedIdx].hours} hrs</span>
        </div>
        {/* Skills and Salary Section */}
        <div className="w-full max-w-4xl">
          <h2 className="text-2xl font-semibold mb-2">Skills you'll gain</h2>
          <div className="flex flex-wrap gap-2 mb-6">
            {course.skills.map(skill => (
              <span key={skill} className="bg-gray-200 px-3 py-1 rounded-full text-sm">{skill}</span>
            ))}
          </div>
          <div className="bg-blue-100 mt-4 p-4 rounded-xl text-center text-lg">
            Median salary: <strong>{course.salary}</strong> | Job Openings: <strong>{course.jobs}</strong>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CourseDetail;
