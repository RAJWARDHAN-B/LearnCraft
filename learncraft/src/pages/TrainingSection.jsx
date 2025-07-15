import React from "react";

const TrainingSection = () => {
  return (
    <div className="bg-white">
      {/* Heading Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
          Explore Learncraft Training Institute
        </h2>
      </div>

      {/* Full-width Gray Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center gap-10">
          {/* Image Group */}
          <div className="flex flex-col items-center lg:items-start gap-6 relative lg:gap-0 lg:space-y-20">
            <img
              src="https://farm3.staticflickr.com/2936/14765026726_b8a02d3989.jpg"
              alt="Training 1"
              className="w-64 md:w-72 lg:w-80 rounded-xl shadow-md z-10"
            />
            <img
              src="https://farm3.staticflickr.com/2936/14765026726_b8a02d3989.jpg"
              alt="Training 2"
              className="w-64 md:w-72 lg:w-80 rounded-xl shadow-md z-20 lg:-mt-24 lg:ml-32"
            />
            <img
              src="https://farm3.staticflickr.com/2936/14765026726_b8a02d3989.jpg"
              alt="Training 3"
              className="w-64 md:w-72 lg:w-80 rounded-xl shadow-md z-10 lg:-mt-24"
            />
          </div>
          

          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-right ml-auto">
            <h3 className="text-4xl font-semibold mb-4">Training Objectives</h3>
            <p className="text-gray-700 text-2xl">
              Empower learners with practical skills and expert knowledge to
              drive real career success. Unlock new opportunities and take your
              career to the next level with training designed for impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingSection;
