import React from "react";
import linkedinIcon from "../assets/linkedin.svg";
import { Helmet } from "react-helmet-async";

const authors = [
  {
    id: 1,
    name: "Pravin More",
    title: "Founder & Civil Design Expert",
    description: "10+ years of experience in infrastructure projects, specializing in RCC detailing and civil engineering tools like Tekla and AutoCAD.",
    image: "/pravinmore.jpeg",
    linkedin: "https://www.linkedin.com/in/rajwardhan-bhandigare/",
  },
  {
    id: 2,
    name: "Aishwarya Dhole",
    title: "HR & Communication Trainer",
    description: "Focused on spoken English, personality development, and empowering rural learners with soft skills and job-readiness training.",
    image: "/aishwaryadhole.jpeg",
    linkedin: "https://www.linkedin.com/in/rajwardhan-bhandigare/",
  },
  {
    id: 3,
    name: "Priyanka Bhise",
    title: "Digital Marketing Strategist",
    description: "Expert in SEO, Meta Ads, and AI-driven tools. She mentors students to manage real digital campaigns and build freelance careers.",
    image: "/priyankabhise.jpeg",
    linkedin: "https://www.linkedin.com/in/rajwardhan-bhandigare/",
  },
  {
    id: 4,
    name: "Pooja Handibag",
    title: "Computer & Accounting Instructor",
    description: "Trained hundreds of rural students in Tally, MS Office, and basic computer skills, helping them become digitally literate.",
    image: "/poojahandibag.jpeg",
    linkedin: "https://www.linkedin.com/in/rajwardhan-bhandigare/",
  },
  {
    id: 5,
    name: "Suraj Panchal",
    title: "Animation & Design Mentor",
    description: "Skilled in graphic design, 2D/3D animation, and visual storytelling. Guides creative learners into the media and design industry.",
    image: "/surajpanchal.jpeg",
    linkedin: "https://www.linkedin.com/in/rajwardhan-bhandigare/",
  },
];

const Authors = () => {
  return (
    <>
      <Helmet>
        <title>Meet Our Authors | Learncraft</title>
        <meta name="description" content="Meet the expert authors and instructors at Learncraft Training Institute. Industry experts, passionate educators, and experienced professionals." />
        <meta property="og:title" content="Meet Our Authors | Learncraft" />
        <meta property="og:description" content="Meet the expert authors and instructors at Learncraft Training Institute. Industry experts, passionate educators, and experienced professionals." />
      </Helmet>
      <div className="authors-section bg-gradient-to-br from-blue-50 to-indigo-100 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Meet Our Authors</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-4">
              At Learncraft Training Institute, our content is crafted by industry experts, passionate educators, and experienced professionals who bring real-world insights into every article.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Whether it's Data Science, Digital Marketing, Civil Engineering, or Rural Education, our authors ensure each piece is accurate, up-to-date, and easy to understand for learners at all levels.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {authors.map((author) => (
              <div key={author.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="relative mb-4">
                    <img
                      src={author.image}
                      alt={author.name}
                      className="w-24 h-24 object-cover object-[center_60%] rounded-full border-4 border-blue-200 shadow-md"
                    />
                    <a
                      href={author.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-md hover:scale-105 transition"
                    >
                      <img src={linkedinIcon} alt="LinkedIn" className="w-4 h-4" />
                    </a>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{author.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{author.title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{author.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Authors;
