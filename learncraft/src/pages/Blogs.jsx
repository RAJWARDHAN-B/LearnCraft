import React from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const DEFAULT_IMAGE = "https://farm3.staticflickr.com/2936/14765026726_b8a02d3989.jpg";

const blogs = [
  {
    id: "mike-norton",
    title: "Staying Relevant in Data Science: How Consistent Skill Growth Drives Mike Norton’s Success",
    desc: "After over 30 years in the telecom industry and a distinguished career as an officer in the Marine Corps, Mike Norton isn't slowing down...",
    img: "/images/mike-norton.jpg",
  },
  {
    id: "kailey-chemistry-strategy",
    title: "From Chemistry to Strategy: How Ishpinder Kailey Used the iMBA to Expand Her Impact in STEM",
    desc: "Ishpinder Kailey transitioned from science to strategic leadership through the iMBA, empowering her work in STEM innovation.",
    img: "/images/chemistry-strategy.jpg",
  },
  {
    id: "self-taught-dev",
    title: "Self-taught web developer proves that anything is possible",
    desc: "From scratch to software success — this developer’s story is proof that determination and free resources can change your future.",
    img: "/images/self-taught-dev.jpg",
  },
  {
    id: "journey-top",
    title: "Way to Top: A Journey Soo Unbelievable",
    desc: "An inspiring professional journey filled with unexpected turns, risks, and bold career moves that paid off.",
    img: "/images/journey-top.jpg",
  },
  {
    id: "jeremy-data-science",
    title: "Mastering Data Science: Jeremy Samuel’s Journey with The University of Illinois",
    desc: "Jeremy's structured learning via the University of Illinois' program helped him shift into a high-impact data science role.",
    img: "/images/jeremy-samuel.jpg",
  },
];

const BlogCard = ({ id, title, desc, img, large }) => (
  <div
    className={`rounded-xl bg-white shadow-md transition hover:shadow-lg ${
      large ? "lg:col-span-2 lg:row-span-2 p-6" : "p-4"
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
      <button className="mt-4 inline block text-black hover:text-blue-600 transition">
        Learn More <span>→</span>
      </button>
    </Link>
  </div>
);

const Blogs = () => {
  return (
    <>
      <Helmet>
        <title>Blog | Learncraft</title>
        <meta name="description" content="Read inspiring stories, tips, and news from the Learncraft Training Institute blog." />
        <meta property="og:title" content="Blog | Learncraft" />
        <meta property="og:description" content="Read inspiring stories, tips, and news from the Learncraft Training Institute blog." />
      </Helmet>
      <div className="bg-gray-50 min-h-screen px-4 sm:px-6 md:px-10 py-8">
        <header className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight">
            Learncraft Training Institute Blog
          </h1>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-auto">
          {blogs.map((blog, idx) => (
            <BlogCard key={idx} {...blog} large={idx===0} />
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
    </>
  );
};

export default Blogs;
