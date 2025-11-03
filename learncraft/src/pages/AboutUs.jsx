import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send,
  GraduationCap,
  Users,
  Award,
  Target,
  MessageSquare
} from "lucide-react";

const AboutUs = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    if (location.hash === "#contact") {
      setTimeout(() => {
        const element = document.getElementById("contact");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitStatus("success");
    setTimeout(() => {
      setSubmitStatus(null);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 3000);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stats = [
    { icon: <GraduationCap size={32} />, label: "Students Enrolled", value: "10K+" },
    { icon: <Users size={32} />, label: "Expert Instructors", value: "50+" },
    { icon: <Award size={32} />, label: "Courses Available", value: "100+" },
    { icon: <Target size={32} />, label: "Success Rate", value: "95%" },
  ];

  const values = [
    {
      title: "Quality Education",
      description: "We are committed to providing high-quality education that meets international standards and prepares students for real-world challenges.",
    },
    {
      title: "Expert Instructors",
      description: "Our courses are taught by industry experts with years of practical experience in their respective fields.",
    },
    {
      title: "Student-Centric Approach",
      description: "We focus on creating a learning environment that prioritizes student success and career growth.",
    },
    {
      title: "Innovation & Excellence",
      description: "We continuously innovate our teaching methods and course content to stay at the forefront of education technology.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>About Us | Learncraft Training Institute</title>
        <meta name="description" content="Learn about Learncraft Training Institute - our mission, values, and commitment to providing quality education. Contact us for inquiries." />
        <meta property="og:title" content="About Us | Learncraft Training Institute" />
        <meta property="og:description" content="Learn about Learncraft Training Institute - our mission, values, and commitment to providing quality education." />
      </Helmet>
      
      <div className="min-h-screen bg-[#f5f9ff] dark:bg-gray-900 transition-colors duration-300">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-yellow-400 dark:to-yellow-600 text-white py-16 px-4 sm:px-6"
        >
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              About Learncraft
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 dark:text-gray-900 max-w-3xl mx-auto">
              Empowering learners with quality education and expert guidance
            </p>
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center max-w-4xl mx-auto">
              At Learncraft Training Institute, our mission is to democratize quality education and 
              provide accessible learning opportunities to students worldwide. We believe that everyone 
              deserves the chance to learn, grow, and achieve their career goals through expert-led 
              courses and comprehensive training programs.
            </p>
          </div>
        </motion.section>

        {/* Stats Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 py-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-blue-600 dark:text-yellow-400 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Values Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-10 text-center">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact Us Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-16"
          id="contact"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Contact Information */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-yellow-400 dark:to-yellow-600 p-8 md:p-12 text-white">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  Get in Touch
                </h2>
                <p className="text-blue-100 dark:text-gray-900 mb-8 text-lg">
                  Have questions or want to learn more? We'd love to hear from you!
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="mt-1 flex-shrink-0" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Address</h3>
                      <p className="text-blue-100 dark:text-gray-900">
                        7th Floor, Building 704, Palm Court,<br />
                        Mehrauli-Gurgaon Rd, DLF Colony,<br />
                        Sector 14, Gurugram, Haryana 122007
                      </p>
                      <p className="text-blue-100 dark:text-gray-900 mt-2">
                        Jijau Nagar, near Chhatrapati Shivaji Maharaj Chowk,<br />
                        beside M.S.E.B. Substation,<br />
                        Bardapur, Maharashtra
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Phone size={24} className="flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-blue-100 dark:text-gray-900">089990 21576</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Mail size={24} className="flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-blue-100 dark:text-gray-900">learncraftinstitute@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <MessageSquare className="text-blue-600 dark:text-yellow-400" size={32} />
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                    Contact Us
                  </h2>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-400 focus:border-transparent dark:bg-gray-700 dark:text-white outline-none transition"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-400 focus:border-transparent dark:bg-gray-700 dark:text-white outline-none transition"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-400 focus:border-transparent dark:bg-gray-700 dark:text-white outline-none transition"
                        placeholder="+91 1234567890"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-400 focus:border-transparent dark:bg-gray-700 dark:text-white outline-none transition"
                      placeholder="What is this regarding?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-400 focus:border-transparent dark:bg-gray-700 dark:text-white outline-none transition resize-none"
                      placeholder="Tell us more about your inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 dark:from-yellow-400 dark:to-yellow-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-800 dark:hover:from-yellow-500 dark:hover:to-yellow-700 transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                  >
                    <Send size={20} />
                    Send Message
                  </button>

                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-green-100 dark:bg-green-900 border border-green-400 dark:border-green-600 text-green-700 dark:text-green-300 px-4 py-3 rounded-lg"
                    >
                      Thank you! Your message has been sent successfully.
                    </motion.div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default AboutUs;

