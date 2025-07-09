import React from "react";
import { Book, Users } from "lucide-react";
import dataScience from "../assets/data-science.jpg";
import digitalMarketing from "../assets/digital-marketing.jpg";
import civilEngineering from "../assets/civil-engineering.jpg";

const courses = [
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
    highlighted: true, // initially highlighted
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
  },
];

const PopularCourses = () => {
  return (
    <div className="py-12 px-4 md:px-16 bg-white">
      <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
        Popular courses.
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div
            key={course.id}
            className={`group bg-white rounded-2xl overflow-hidden relative transition duration-300 hover:scale-[1.02] hover:shadow-xl border-2 ${
              course.highlighted ? "border-indigo-500" : "border-transparent"
            } hover:border-indigo-500`}
          >
            <div className="relative">
              <img
                src={course.image}
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

              {/* Rating */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1 text-sm">
                  <span className="text-red-600 font-semibold">{course.rating}</span>
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-yellow-400 ${
                        i < Math.round(course.reviews) ? "opacity-100" : "opacity-40"
                      }`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-md font-semibold text-gray-800">${course.price}</p>
              </div>

              {/* Stats */}
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularCourses;
