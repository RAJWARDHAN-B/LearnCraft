import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { blogs } from "../data/blogs";

const DEFAULT_IMAGE =
  "https://farm3.staticflickr.com/2936/14765026726_b8a02d3989.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AnimatedSection = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

const BlogPost = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return <div className="p-10 text-center text-2xl">Blog not found</div>;
  }

  return (
    <div className="max-w-6xl mx-auto font-sans text-gray-800 px-4 md:px-8 py-10">
      {/* Hero Image */}
      <div className="relative h-64 md:h-[450px] overflow-hidden rounded-lg mb-12">
        <img
          src={blog.img || DEFAULT_IMAGE}
          alt={blog.title}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6 text-white">
          <div>
            <p className="text-sm mb-2">{blog.date} • 4 Min</p>
            <h1 className="text-3xl md:text-4xl font-bold">
              {blog.title}
            </h1>
            <p className="mt-2 text-sm">Written by {blog.author}</p>
          </div>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left Column */}
        <div className="md:w-1/4 space-y-3 text-sm">
          <AnimatedSection>
            <p><strong>Date:</strong> {blog.date}</p>
            <p><strong>Facebook:</strong> {blog.social.facebook}</p>
            <p><strong>Instagram:</strong> {blog.social.instagram}</p>
            <p><strong>LinkedIn:</strong> {blog.social.linkedin}</p>
            <p><strong>YouTube:</strong> {blog.social.youtube}</p>
          </AnimatedSection>
        </div>

        {/* Right Column */}
        <div className="md:w-3/4 space-y-8">
          {blog.content.map((section, idx) => (
            <AnimatedSection key={idx}>
              {section.heading && (
                <h2 className="text-2xl font-semibold">{section.heading}</h2>
              )}
              {section.text.map((t, i) => (
                <p className="text-gray-700 leading-relaxed mt-2" key={i}>{t}</p>
              ))}
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
