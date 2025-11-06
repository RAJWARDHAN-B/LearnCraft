import React from 'react';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const blogs = [
  // Data Science Blogs
  {
    id: "data-science-fundamentals-2025",
    title: "Data Science Fundamentals: A Complete Guide for Beginners in 2025",
    desc: "Discover the essential concepts, tools, and career paths in data science. Learn how to start your journey in this rapidly growing field with practical tips and real-world applications.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    category: "Data Science",
    date: "January 15, 2025"
  },
  {
    id: "machine-learning-career-guide",
    title: "How to Build a Successful Career in Machine Learning: Expert Tips",
    desc: "Explore the roadmap to becoming a machine learning engineer. From learning Python to mastering algorithms, this guide covers everything you need to know to land your dream job.",
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
    category: "Data Science",
    date: "January 10, 2025"
  },
  {
    id: "python-data-analysis-tutorial",
    title: "Python for Data Analysis: Essential Libraries and Techniques",
    desc: "Master Pandas, NumPy, and Matplotlib to analyze and visualize data effectively. This comprehensive tutorial includes hands-on examples and best practices for data professionals.",
    img: "/pyfordablog.jpg",
    category: "Data Science",
    date: "January 5, 2025"
  },
  // Digital Marketing Blogs
  {
    id: "digital-marketing-strategies-2025",
    title: "Top Digital Marketing Strategies That Work in 2025",
    desc: "Stay ahead of the competition with the latest digital marketing trends. Learn about SEO optimization, social media marketing, content strategies, and AI-driven campaigns.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    category: "Digital Marketing",
    date: "January 12, 2025"
  },
  {
    id: "seo-optimization-guide",
    title: "Complete SEO Optimization Guide: Boost Your Website Rankings",
    desc: "Learn proven SEO techniques to improve your website's visibility. From keyword research to technical SEO, discover strategies that drive organic traffic and conversions.",
    img: "/seooptblog.jpg",
    category: "Digital Marketing",
    date: "January 8, 2025"
  },
  {
    id: "social-media-marketing-tips",
    title: "Social Media Marketing: Best Practices for 2025",
    desc: "Master Facebook, Instagram, LinkedIn, and TikTok marketing. Learn how to create engaging content, build your audience, and measure ROI effectively.",
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    category: "Digital Marketing",
    date: "January 3, 2025"
  },
  // Civil Engineering Blogs
  {
    id: "autocad-mastery-guide",
    title: "AutoCAD Mastery: Essential Skills for Civil Engineers",
    desc: "Master 2D and 3D drafting techniques in AutoCAD. Learn advanced tools, shortcuts, and workflows that will make you more efficient in civil engineering projects.",
    img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
    category: "Civil Engineering",
    date: "January 14, 2025"
  },
  {
    id: "revit-architecture-bim",
    title: "Revit Architecture and BIM: Transforming Modern Construction",
    desc: "Discover how Building Information Modeling (BIM) is revolutionizing construction. Learn Revit fundamentals and how it enhances collaboration and project efficiency.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
    category: "Civil Engineering",
    date: "January 11, 2025"
  },
  {
    id: "structural-analysis-fundamentals",
    title: "Structural Analysis Fundamentals: Key Concepts Every Engineer Should Know",
    desc: "Understand load calculations, material properties, and design principles. Explore modern analytical methods including finite element analysis and computer modeling.",
    img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
    category: "Civil Engineering",
    date: "January 7, 2025"
  },
  // Rural Courses Blogs
  {
    id: "rural-skill-development",
    title: "Empowering Rural Communities Through Skill Development Programs",
    desc: "Learn how skill development training programs are transforming rural livelihoods. Discover success stories and the impact of digital literacy, vocational training, and entrepreneurship.",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop",
    category: "Rural Courses",
    date: "January 13, 2025"
  },
  {
    id: "digital-literacy-rural-india",
    title: "Digital Literacy in Rural India: Bridging the Technology Gap",
    desc: "Explore initiatives that bring computer skills and digital awareness to rural areas. Learn about programs teaching MS Office, basic computing, and online tools to empower communities.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    category: "Rural Courses",
    date: "January 9, 2025"
  },
  {
    id: "vocational-training-success",
    title: "Success Stories: How Vocational Training Changed Lives in Rural Areas",
    desc: "Read inspiring stories of individuals who transformed their careers through vocational training. From Tally accounting to spoken English, discover pathways to success.",
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop",
    category: "Rural Courses",
    date: "January 6, 2025"
  }
];

const BlogCard = ({ id, title, desc, img, category, date }) => (
  <div className="rounded-xl bg-white shadow-md transition hover:shadow-lg p-4 h-full flex flex-col">
    <img
      src={img}
      alt={title}
      className="rounded-xl w-full h-48 sm:h-56 md:h-64 object-cover"
      loading="lazy"
    />
    <div className="mt-4 flex-grow flex flex-col">
      <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">{category}</span>
      <h3 className="mt-2 font-semibold text-lg sm:text-xl">{title}</h3>
      {desc && <p className="text-sm text-gray-600 mt-2 line-clamp-3 flex-grow">{desc}</p>}
      <p className="text-xs text-gray-500 mt-2">{date}</p>
      <Link to={`/blog/${id}`} className="mt-4">
        <button className="inline-block text-black hover:text-blue-600 transition font-medium">
          Read More <span>→</span>
        </button>
      </Link>
    </div>
  </div>
);

const Blogs = () => {
  return (
    <>
      <Helmet>
        <title>Blog | Learncraft</title>
        <meta name="description" content="Read inspiring stories, tips, and news from the Learncraft Training Institute blog. Articles on Data Science, Digital Marketing, Civil Engineering, and Rural Development." />
        <meta property="og:title" content="Blog | Learncraft" />
        <meta property="og:description" content="Read inspiring stories, tips, and news from the Learncraft Training Institute blog." />
      </Helmet>
      <div className="bg-gray-50 min-h-screen px-4 sm:px-6 md:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-gray-900">
              Learncraft Training Institute Blog
            </h1>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest trends, tips, and insights in Data Science, Digital Marketing, Civil Engineering, and Rural Development.
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
      </div>
    </>
  );
};

export default Blogs;
