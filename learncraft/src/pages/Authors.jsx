import React from "react";
import linkedinIcon from "../assets/linkedin.png";
import author1 from "../assets/author1.jpg";
import author2 from "../assets/author2.jpg";
import author3 from "../assets/author3.jpg";

const authors = [
  {
    id: 1,
    name: "Shoo Thar Mien",
    title: "HR Manager",
    image: author1,
    linkedin: "#",
  },
  {
    id: 2,
    name: "Shoo Thar Mien",
    title: "Senior Designer",
    image: author2,
    linkedin: "#",
  },
  {
    id: 3,
    name: "Shoo Thar Mien",
    title: "Data Analyst",
    image: author3,
    linkedin: "#",
  },
];

const Authors = () => {
  return (
    <div className="bg-blue-100 py-16 px-4 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-12">Meet our authors.</h2>
      <div className="flex flex-wrap justify-center gap-10">
        {authors.map((author) => (
          <div key={author.id} className="flex flex-col items-center space-y-4">
            <div className="relative">
              <img
                src={author.image}
                alt={author.name}
                className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-md"
              />
              <a
                href={author.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-md hover:scale-105 transition"
              >
                <img src={linkedinIcon} alt="LinkedIn" className="w-5 h-5" />
              </a>
            </div>
            <div>
              <p className="font-semibold text-gray-900">{author.name}</p>
              <p className="text-sm text-gray-500">{author.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Authors;
