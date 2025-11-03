import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Star } from "lucide-react";
import { Helmet } from "react-helmet-async";

const testimonials = [
  {
    name: "Rohit Pawar",
    title: "Data Science Course",
    message:
      "The hands-on projects and Python training were game-changers for me. I got placed as a junior data analyst right after completing the course!",
    gender: "male",
    stars: 4.8,
  },
  {
    name: "Sneha Kulkarni",
    title: "Digital Marketing Course",
    message:
      "From SEO to running Meta Ads, I learned everything practically. I'm now freelancing and managing 3 clients on my own.",
    gender: "female",
    stars: 4.6,
  },
  {
    name: "Vishal Jadhav",
    title: "Civil Engineering Course",
    message:
      "Tekla and AutoCAD training here helped me work on real site projects. The BBS and estimation modules were super useful.",
    gender: "male",
    stars: 4.7,
  },
  {
    name: "Priya More",
    title: "Rural Computer Basics",
    message:
      "I never thought I'd learn MS Office and Tally in my village. Now I'm teaching others and earning part-time!",
    gender: "female",
    stars: 4.9,
  },
  {
    name: "Amol Patil",
    title: "Digital Marketing with AI Tools",
    message:
      "ChatGPT, Canva, and real campaign practice made the course so advanced. Definitely not the typical classroom training!",
    gender: "male",
    stars: 4.5,
  },
  {
    name: "Meenal Deshmukh",
    title: "Civil Engineering (BIM)",
    message:
      "Revit and BIM sessions were very helpful. The trainers guided me like a mentor, and now I've joined a local architecture firm.",
    gender: "female",
    stars: 4.8,
  },
  {
    name: "Rahul Gite",
    title: "Rural Awareness + CSC Skills",
    message:
      "I learned about government schemes, online services, and also earned money helping people apply for jobs and documents online.",
    gender: "male",
    stars: 4.6,
  },
];

const Testimonials = () => {
  return (
    <>
      <Helmet>
        <title>Student Reviews | Learncraft</title>
        <meta name="description" content="Read authentic student reviews and success stories from Learncraft Training Institute. See how our courses have transformed careers." />
        <meta property="og:title" content="Student Reviews | Learncraft" />
        <meta property="og:description" content="Read authentic student reviews and success stories from Learncraft Training Institute. See how our courses have transformed careers." />
      </Helmet>
      <div className="testimonials-section py-16 px-4 md:px-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Student Reviews</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hear from our successful students who have transformed their careers with our practical, industry-focused training programs.
            </p>
          </div>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          loop={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          modules={[Pagination, Autoplay]}
          className="testimonial-swiper"
        >

          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white rounded-2xl shadow-lg p-6 relative">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={item.gender === "male" ? "/maleiconreview.png" : "/femaleiconreview.png"}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded-full border-2 border-white shadow-md"
                  />
                  <div className="text-left">
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.title}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700 mb-4">{item.message}</p>
                <div className="flex gap-1 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      fill={i < Math.floor(item.stars) ? "currentColor" : "none"} 
                      stroke="currentColor"
                      className={i < item.stars ? "text-yellow-500" : "text-gray-300"}
                    />
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
