import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const DEFAULT_IMAGE =
  "https://farm3.staticflickr.com/2936/14765026726_b8a02d3989.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AnimatedSection = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

const BlogPost = () => {
  return (
    <div className="max-w-6xl mx-auto font-sans text-gray-800 px-4 md:px-8 py-10">
      {/* Hero Image */}
      <div className="relative h-64 md:h-[450px] overflow-hidden rounded-lg mb-12">
        <img
          src={DEFAULT_IMAGE}
          alt="Blog Cover"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6 text-white">
          <div>
            <p className="text-sm mb-2">Newest Blog • 4 Min</p>
            <h1 className="text-3xl md:text-4xl font-bold">
              The Art of Home Transformation
            </h1>
            <p className="mt-2 text-sm">Written by Ariel van Houten</p>
          </div>
        </div>
      </div>

      {/* Two Column Layout */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left Column */}
        <div className="md:w-1/4 space-y-3 text-sm">
          <AnimatedSection>
            <p><strong>Date:</strong> 11 Jan 2024</p>
            <p><strong>Facebook:</strong> Stuffsus</p>
            <p><strong>Instagram:</strong> @Stuff_sus</p>
            <p><strong>LinkedIn:</strong> Stuffsus</p>
            <p><strong>YouTube:</strong> Stuffsus</p>
          </AnimatedSection>
        </div>

        {/* Right Column */}
        <div className="md:w-3/4 space-y-8">
          <AnimatedSection>
            <p className="text-gray-700 leading-relaxed">
              In the fast-evolving world of home decor, embracing the art of
              transformation is the key to keeping your living spaces fresh,
              vibrant, and in tune with the latest trends. At StuffUs, we
              believe that your home is a canvas waiting to be adorned with
              innovation and style.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-2xl font-semibold">Introduction</h2>
            <p className="text-gray-700 leading-relaxed mt-2">
              Software as a Service (SaaS) has transformed the way businesses
              operate, providing access to a wide range of applications and
              tools through the internet...
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              One of the biggest benefits of using a SaaS solution is that it
              eliminates the need for businesses to invest in expensive hardware
              or IT infrastructure...
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-2xl font-semibold">1. Increased Efficiency and Productivity</h2>
            <p className="text-gray-700 leading-relaxed mt-2">
              Mercivate offers a range of features that can help your team work
              more efficiently and productively...
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-2xl font-semibold">2. Improved Customer Satisfaction</h2>
            <p className="text-gray-700 leading-relaxed mt-2">
              With Mercivate, you can enhance the customer experience by
              providing them with a seamless and personalized experience...
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <h2 className="text-2xl font-semibold">3. Enhanced Data Analysis</h2>
            <p className="text-gray-700 leading-relaxed mt-2">
              Data is a critical component of any business, and SaaS products
              offer advanced data analytics tools that can help you make better
              business decisions...
            </p>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
