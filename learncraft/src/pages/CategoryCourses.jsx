import React from "react";
import { useParams, Link } from "react-router-dom";
import { Book, Users } from "lucide-react";
import dataScience from "../assets/data-science.jpg";
import digitalMarketing from "../assets/digital-marketing.jpg";
import civilEngineering from "../assets/civil-engineering.jpg";

const allCourses = [
  {
    id: 1,
    title: "Data Science",
    author: "Colt stelle",
    rating: 4.4,
    reviews: 4,
    price: 20,
    classes: 12,
    students: 150,
    image: dataScience,
    bestSeller: true,
    category: "data-science",
  },
  {
    id: 2,
    title: "Digital Marketing",
    author: "Colt stelle",
    rating: 4.5,
    reviews: 4.5,
    price: 20,
    classes: 12,
    students: 130,
    image: digitalMarketing,
    bestSeller: true,
    category: "digital-marketing",
  },
  {
    id: 3,
    title: "Civil Engineering",
    author: "Colt stelle",
    rating: 5,
    reviews: 5,
    price: 20,
    classes: 12,
    students: 120,
    image: civilEngineering,
    bestSeller: true,
    category: "civil-engineering",
  },
  // Add more courses and categories as needed
];

const DEFAULT_IMAGE = "https://farm3.staticflickr.com/2936/14765026726_b8a02d3989.jpg";

const unslugify = (slug) => slug.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());

const CategoryCourses = () => {
  const { categoryName } = useParams();
  const filteredCourses = allCourses.filter(
    (course) => course.category === categoryName
  );

  return (
    <div className="min-h-screen bg-[#f5f9ff] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          {unslugify(categoryName)} Courses
        </h1>
        {filteredCourses.length === 0 ? (
          <div className="text-center text-lg text-gray-500">No courses found in this category.</div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <Link
                to={`/courses/${course.id}`}
                key={course.id}
                className="group bg-white rounded-2xl overflow-hidden relative transition duration-300 hover:scale-[1.02] hover:shadow-xl border-2 hover:border-indigo-500"
              >
                <div className="relative">
                  <img
                    src={DEFAULT_IMAGE}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  {course.bestSeller && (
                    <span className="absolute bottom-2 right-2 bg-indigo-700 text-white text-xs px-3 py-1 rounded-full font-semibold">
                      BEST SELLER
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold">{course.title}</h3>
                  <p className="text-sm text-gray-500 mb-2">{course.author}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-sm">
                      <span className="text-red-600 font-semibold">{course.rating}</span>
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-yellow-400 ${i < Math.round(course.reviews) ? "opacity-100" : "opacity-40"}`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="text-md font-semibold text-gray-800">${course.price}</p>
                  </div>
                  <div className="border-t pt-3 flex justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Book size={16} />
                      {course.classes} classes
                    </div>
                    <div className="flex items-center gap-1">
                      <Users size={16} />
                      {course.students} students
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryCourses; 