import { useParams } from "react-router-dom";
import React from "react";

// Sample content mapped by blog id
const blogContent = {
  "mike-norton": {
    title: "Staying Relevant in Data Science: Mike Norton",
    img: "/images/mike-norton.jpg",
    content: (
      <>
        <p>
          Mike Norton, a T-Mobile product manager, has evolved from a Marine Corps officer into a data science leader.
          His journey combines military discipline, technical acumen, and continuous learning. He believes, "To be of
          maximum value, you have to keep learning."
        </p>
        <p>
          At T-Mobile, he leads four ML teams, mentors peers, and promotes data-driven leadership. He’s currently
          completing a third master’s degree and investing time into learning about large language models.
        </p>
        <p>
          Mike’s story is a powerful example of how lifelong learning can keep you relevant and impactful.
        </p>
      </>
    ),
  },
  "kailey-chemistry-strategy": {
    title: "From Chemistry to Strategy: Ishpinder Kailey",
    img: "/images/chemistry-strategy.jpg",
    content: (
      <>
        <p>
          Ishpinder transitioned from a background in chemistry to strategic leadership using the iMBA program. She now
          works in STEM policy and innovation, helping reshape how women are represented in leadership.
        </p>
      </>
    ),
  },
  "self-taught-dev": {
    title: "Self-taught Web Developer Proves Anything is Possible",
    img: "/images/self-taught-dev.jpg",
    content: (
      <>
        <p>
          After dropping out of college, this developer mastered full-stack web development through YouTube, GitHub, and
          online courses. Today, they lead engineering at a YC-backed startup.
        </p>
      </>
    ),
  },
  "journey-top": {
    title: "Way to Top: A Journey Soo Unbelievable",
    img: "/images/journey-top.jpg",
    content: (
      <>
        <p>
          A story of grit and growth—from a small-town coder to a Google software engineer. His journey inspires many to
          trust the process, face rejection, and keep leveling up.
        </p>
      </>
    ),
  },
  "jeremy-data-science": {
    title: "Jeremy Samuel’s Data Science Journey at UIUC",
    img: "/images/jeremy-samuel.jpg",
    content: (
      <>
        <p>
          Jeremy joined the UIUC Data Science program to transform from a data analyst into a true ML engineer. He
          mastered Python, statistics, and NLP, and now leads AI initiatives at a Fortune 500 company.
        </p>
      </>
    ),
  },
};

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogContent[id];

  if (!blog) return <div className="p-6 text-xl text-center">Blog not found</div>;

  return (
    <div className="px-4 sm:px-6 md:px-10 py-6 max-w-5xl mx-auto">
      <img
        src={blog.img}
        alt={blog.title}
        className="w-full h-auto object-cover rounded-xl mb-6 max-h-[400px]"
      />
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-gray-800">
        {blog.title}
      </h1>
      <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed">
        {blog.content}
      </div>
    </div>
  );
};

export default BlogDetail;
