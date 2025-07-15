import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Star } from "lucide-react";
import { Helmet } from "react-helmet-async";

// Avatar imports
import avatar1 from "../assets/avatar1.jpg";
import avatar2 from "../assets/avatar2.jpg";
import avatar3 from "../assets/avatar3.webp";
import avatar4 from "../assets/avatar4.jpg";

const testimonials = [
  {
    name: "Robert Fox",
    title: "CEO, Parkview Int.Ltd",
    message:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    avatar: avatar1,
    stars: 5,
  },
  {
    name: "Leslie Alexander",
    title: "CEO, Parkview Int.Ltd",
    message:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    avatar: avatar2,
    stars: 5,
  },
  {
    name: "Cody Fisher",
    title: "CEO, Parkview Int.Ltd",
    message:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.",
    avatar: avatar3,
    stars: 5,
  },
  {
    name: "Amelia Rivera",
    title: "Marketing Manager, BrightWave",
    message:
      "This platform has completely transformed the way we interact with our customers. Exceptional service and support!",
    avatar: avatar4,
    stars: 5,
  },
];

const Testimonials = () => {
  return (
    <>
      <Helmet>
        <title>Testimonials | Learncraft</title>
        <meta name="description" content="See what our learners and partners say about Learncraft. Read testimonials and success stories from our community." />
        <meta property="og:title" content="Testimonials | Learncraft" />
        <meta property="og:description" content="See what our learners and partners say about Learncraft. Read testimonials and success stories from our community." />
      </Helmet>
      <div className="py-16 px-4 md:px-16 bg-white">
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
                    src={item.avatar}
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
                  {[...Array(item.stars)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" stroke="none" />
                  ))}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Testimonials;
