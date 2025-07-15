import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

// Dummy course data
const courses = [
  {
    id: 1,
    title: "Construction project management",
    subtitle: "Course 1 • 11 hours",
    image: "/assets/pm.jpg",
  },
  {
    id: 2,
    title: "Construction Scheduling",
    subtitle: "Course 2 • 18 hours",
    image: "/assets/schedule.jpg",
  },
  {
    id: 3,
    title: "Construction cost estimation & cost control",
    subtitle: "Course 3 • 6 hours",
    image: "/assets/cost.jpg",
  },
  {
    id: 4,
    title: "Construction Finance",
    subtitle: "Course 4 • 25 hours",
    image: "/assets/finance.jpg",
  },
  {
    id: 5,
    title: "Construction Industry : Greatest Estate",
    subtitle: "Course 5 • 8 hours",
    image: "/assets/estate.jpg",
  },
];

// Helper to get course progress from localStorage
const STORAGE_KEY = "learncraft_watched_videos";
const COURSE_TOPICS = {
  1: 6, // Data Science (from CourseDetail)
  2: 6, // Digital Marketing (assume same for demo)
  3: 6, // Civil Engineering (assume same for demo)
};
function getCourseProgress(courseId) {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
  const watched = data[courseId] || [];
  const total = COURSE_TOPICS[courseId] || 1;
  const percent = Math.round((watched.length / total) * 100);
  return { percent, completed: watched.length === total };
}

const MyLearning = () => {
  const [openCourse, setOpenCourse] = useState(null);

  const toggleCourse = (id) => {
    setOpenCourse(openCourse === id ? null : id);
  };

  return (
    <div className="max-w-7xl mx-auto px-2 xs:px-4 py-8 xs:py-12">
      <h2 className="text-2xl xs:text-3xl font-bold mb-6 xs:mb-8">My Learning</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 xs:gap-8">
        {/* Course List */}
        <div className="lg:col-span-2 space-y-4 xs:space-y-6">
          <div className="bg-white shadow-sm rounded-xl border p-2 xs:p-4 space-y-3 xs:space-y-4">
            {courses.map((course) => {
              const { percent, completed } = getCourseProgress(course.id);
              return (
                <div
                  key={course.id}
                  className="flex items-start justify-between border-b pb-4 last:border-b-0 last:pb-0"
                >
                  <div className="flex items-start gap-4">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-12 xs:w-14 h-12 xs:h-14 rounded object-cover"
                    />
                    <div>
                      <h3 className="font-semibold underline flex items-center gap-2 text-sm xs:text-base">{course.title} {completed && <span className='bg-green-600 text-white text-xs px-2 py-1 rounded-full font-semibold shadow'>COMPLETED</span>}</h3>
                      <p className="text-xs xs:text-sm text-gray-500">{course.subtitle}</p>
                      {/* Progress Bar */}
                      <div className="mt-1 xs:mt-2">
                        <div className="w-32 xs:w-40 h-2 bg-blue-100 rounded-full overflow-hidden">
                          <div
                            className="h-2 bg-blue-500 rounded-full transition-all duration-300"
                            style={{ width: `${percent}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-blue-700 mt-1">{percent}%</div>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleCourse(course.id)}
                    className="text-blue-600 font-medium flex items-center gap-1"
                  >
                    {openCourse === course.id ? (
                      <>
                        Course details <ChevronUp size={16} />
                      </>
                    ) : (
                      <>
                        Course details <ChevronDown size={16} />
                      </>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Greeting Box */}
        <div className="bg-white border border-blue-400 rounded-xl p-6 shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-red-400 to-white"></div>
            <h3 className="text-lg font-semibold">Good Afternoon,<br />Albert</h3>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">
            Your learning journey is just beginning, and we’re here to support you every step
            of the way. Explore our wide range of courses designed by industry experts, and
            find the perfect fit to help you reach your personal and professional goals. Remember,
            continuous learning is the key to success—stay curious, stay motivated, and keep pushing
            yourself forward. We’re excited to be part of your growth and can’t wait to see what you
            achieve next!
          </p>
        </div>
      </div>
    </div>
  );
};

export default MyLearning;
