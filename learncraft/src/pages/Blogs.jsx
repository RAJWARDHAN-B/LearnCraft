import React from 'react';
import { Link } from "react-router-dom";

const DEFAULT_IMAGE = "https://farm3.staticflickr.com/2936/14765026726_b8a02d3989.jpg";

const blogs = [
  {
    id: "mike-norton",
    title: "Staying Relevant in Data Science: How Consistent Skill Growth Drives Mike Norton’s Success",
    desc: "After over 30 years in the telecom industry and a distinguished career as an officer in the Marine Corps, Mike Norton isn't slowing down...",
    img: "/images/mike-norton.jpg",
    large: true,
  },
  {
    id: "kailey-chemistry-strategy",
    title: "From Chemistry to Strategy: How Ishpinder Kailey Used the iMBA to Expand Her Impact in STEM",
    img: "/images/chemistry-strategy.jpg",
  },
  {
    id: "self-taught-dev",
    title: "Self-taught web developer proves that anything is possible",
    img: "/images/self-taught-dev.jpg",
  },
  {
    id: "journey-top",
    title: "Way to Top: A Journey Soo Unbelievable",
    img: "/images/journey-top.jpg",
  },
  {
    id: "jeremy-data-science",
    title: "Mastering Data Science: Jeremy Samuel’s Journey with The University of Illinois",
    img: "/images/jeremy-samuel.jpg",
  },
];

const BlogCard = ({ id, title, desc, img, large }) => (
  <div
    className={`rounded-xl bg-white shadow-md transition hover:shadow-lg ${
      large ? "md:col-span-2 md:row-span-2 p-6" : "p-4"
    }`}
  >
    <img
      src={DEFAULT_IMAGE}
      alt={title}
      className="rounded-xl w-full h-48 sm:h-56 md:h-64 object-cover"
    />
    <h3 className="mt-4 font-semibold text-lg sm:text-xl">{title}</h3>
    {desc && <p className="text-sm text-gray-600 mt-2">{desc}</p>}
    <Link to={`/blog/${id}`}>
      <button className="mt-4 text-blue-600 font-medium hover:underline flex items-center gap-1">
        Learn More <span>→</span>
      </button>
    </Link>
  </div>
);

const Blogs = () => {
  return (
    <div className="bg-gray-50 min-h-screen px-4 sm:px-6 md:px-10 py-8">
      <header className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
          Learncraft Training Institute Blog
        </h1>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-fr">
        {blogs.map((blog, idx) => (
          <BlogCard key={idx} {...blog} />
        ))}
      </div>

      <footer className="mt-16 border-t pt-8 text-center text-sm text-gray-500">
        <p>©2025 Learncraft Training Institute. All Rights Reserved</p>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms & Conditions</a>
        </div>
      </footer>
    </div>
  );
};

export default Blogs;
