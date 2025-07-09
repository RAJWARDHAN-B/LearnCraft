import React from "react";
import img1 from "../assets/microsoft.svg"; // Replace with  actual image paths
import img2 from "../assets/microsoft.svg";
import img3 from "../assets/microsoft.svg";

const TrainingObjectives = () => {
  return (
    <section className="bg-[#f4f4f4] py-12 px-4 md:px-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        Explore Learncraft Training Institute
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 gap-4 max-w-[500px]">
          <img src={img1} alt="Training Visual 1" className="rounded-xl" />
          <img src={img2} alt="Training Visual 2" className="rounded-xl" />
          <img src={img3} alt="Training Visual 3" className="rounded-xl" />
        </div>

        <div className="max-w-xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Training Objectives</h3>
          <p className="text-gray-700 text-lg leading-relaxed">
            Empower learners with practical skills and expert knowledge to drive real
            career success. Unlock new opportunities and take your career to the next
            level with training designed for impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TrainingObjectives;
