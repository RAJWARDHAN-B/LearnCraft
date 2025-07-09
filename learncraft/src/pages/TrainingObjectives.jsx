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
          <img src="https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Training Visual 1" className="rounded-xl" />
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Training Visual 2" className="rounded-xl" />
          <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Training Visual 3" className="rounded-xl" />
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
