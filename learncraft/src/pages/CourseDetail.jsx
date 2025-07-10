import React from "react";
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

const CourseDetail = () => {
  const { id } = useParams();
  const course = courseData[id];

  if (!course) return <div className="p-10 text-xl">Course not found.</div>;

  return (
    <div className="p-6 md:p-12 bg-white">
      <img src={course.image} alt={course.title} className="w-full h-64 object-cover rounded-xl mb-6" />
      <h1 className="text-4xl font-bold mb-2">{course.title}</h1>
      <p className="text-gray-600 mb-4">{course.description}</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-gray-100 p-4 rounded-xl mb-6 text-center text-sm">
        <div><strong>Level:</strong><br />{course.level}</div>
        <div><strong>Rating:</strong><br />{course.rating} ({course.reviews} reviews)</div>
        <div><strong>Duration:</strong><br />{course.duration}</div>
        <div><strong>Next Batch:</strong><br />{course.startDate}</div>
      </div>

      <h2 className="text-2xl font-semibold mb-2">Skills you'll gain</h2>
      <div className="flex flex-wrap gap-2 mb-6">
        {course.skills.map(skill => (
          <span key={skill} className="bg-gray-200 px-3 py-1 rounded-full text-sm">{skill}</span>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-2">Courses Included</h2>
      <ul className="divide-y">
        {course.courseList.map((c, idx) => (
          <li key={idx} className="py-2 flex justify-between">
            <span className="underline">{c.name}</span>
            <span>{c.hours} hrs</span>
          </li>
        ))}
      </ul>

      <div className="bg-blue-100 mt-8 p-4 rounded-xl text-center text-lg">
        Median salary: <strong>{course.salary}</strong> | Job Openings: <strong>{course.jobs}</strong>
      </div>
    </div>
  );
};

export default CourseDetail;
