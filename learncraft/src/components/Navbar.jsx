import React, { useState } from "react";
import { Menu, X, ChevronDown, BarChart2, Megaphone, Building2, Code2, DollarSign, Palette } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logomain from "../assets/logomain.svg";
import courses from "../data/courses";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [exploreDropdownOpen, setExploreDropdownOpen] = useState(false);
  const location = useLocation();

  const categories = [
    { 
      name: "Data Science", 
      icon: <BarChart2 size={20} className="text-blue-600" />,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    { 
      name: "Digital Marketing", 
      icon: <Megaphone size={20} className="text-pink-500" />,
      color: "text-pink-500",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200"
    },
    { 
      name: "Civil Engineering", 
      icon: <Building2 size={20} className="text-yellow-600" />,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200"
    },
    { 
      name: "Programming", 
      icon: <Code2 size={20} className="text-green-600" />,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    { 
      name: "Finance", 
      icon: <DollarSign size={20} className="text-emerald-600" />,
      color: "text-emerald-600",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200"
    },
    { 
      name: "Design", 
      icon: <Palette size={20} className="text-purple-600" />,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
  ];

  const getCoursesByCategory = (categoryName) => {
    const categorySlug = categoryName.toLowerCase().replace(/ /g, "-");
    return courses.filter(course => course.category === categorySlug).slice(0, 2);
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Explore", path: "/explore" },
    { name: "Authors", path: "/#authors" },
    { name: "Testimonial", path: "/#testimonials" },
    { name: "Blog", path: "/blog" },
  ];

  return (
    <>
      <style>{`html { scroll-behavior: smooth; }`}</style>
      <nav className="w-full bg-white shadow-md">
        <div className="max-w-7xl mx-auto py-4 flex justify-between items-center">
          <img src={logomain} alt="Logo" className="h-16 w-80 object-contain" />

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-6 text-gray-700 font-medium mx-auto">
            {navLinks.map(({ name, path }, i) => (
              <li key={i} className="relative">
                {name === "Explore" ? (
                  <div
                    className="cursor-pointer hover:text-[#6C63FF] relative flex items-center gap-1"
                    onMouseEnter={() => setExploreDropdownOpen(true)}
                    onMouseLeave={() => setExploreDropdownOpen(false)}
                  >
                    <Link
                      to={path}
                      className={`cursor-pointer hover:text-[#6C63FF] relative ${
                        location.pathname === path ? "text-[#3F3D56]" : ""
                      }`}
                    >
                      {name}
                    </Link>
                    <ChevronDown size={16} className={`transition-transform duration-200 ${exploreDropdownOpen ? 'rotate-180' : ''}`} />
                    {location.pathname === path && (
                      <div className="w-full h-[2px] bg-[#6C63FF] absolute -bottom-1 left-0"></div>
                    )}
                    
                    {/* Explore Dropdown */}
                    {exploreDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-[650px] bg-white rounded-xl shadow-2xl border border-gray-200 z-50 p-3">
                        <div className="grid grid-cols-2 gap-3">
                          {categories.map((category) => {
                            const categoryCourses = getCoursesByCategory(category.name);
                            return (
                              <div key={category.name} className="space-y-1.5">
                                <div className="flex items-center gap-2 mb-1.5">
                                  {category.icon}
                                  <h3 className="font-semibold text-gray-900 text-sm">{category.name}</h3>
                                </div>
                                <div className="space-y-0.5">
                                  {categoryCourses.map((course) => (
                                    <Link
                                      key={course.id}
                                      to={`/courses/${course.id}`}
                                      className="flex items-center gap-2 p-1 rounded-lg hover:bg-gray-50 transition-colors"
                                      onClick={() => setExploreDropdownOpen(false)}
                                    >
                                      <img
                                        src={course.image}
                                        alt={course.title}
                                        className="w-10 h-6 object-cover rounded"
                                      />
                                      <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate">
                                          {course.title}
                                        </p>
                                        <p className="text-xs text-gray-500">
                                          ${course.price} • {course.rating}★
                                        </p>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                                <Link
                                  to={`/category/${category.name.toLowerCase().replace(/ /g, "-")}`}
                                  className="text-xs text-blue-600 hover:text-blue-800 font-medium"
                                  onClick={() => setExploreDropdownOpen(false)}
                                >
                                  View all {category.name} courses →
                                </Link>
                              </div>
                            );
                          })}
                        </div>
                        <div className="mt-3 pt-2 border-t border-gray-200">
                          <Link
                            to="/explore"
                            className="inline-flex items-center gap-2 text-xs text-blue-600 hover:text-blue-800 font-medium"
                            onClick={() => setExploreDropdownOpen(false)}
                          >
                            Browse all courses →
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                ) : path.startsWith("/#") ? (
                  <a
                    href={path}
                    className={`cursor-pointer hover:text-[#6C63FF] relative ${
                      location.hash === path.replace("/", "") && location.pathname === "/" ? "text-[#3F3D56]" : ""
                    }`}
                  >
                    {name}
                    {location.hash === path.replace("/", "") && location.pathname === "/" && (
                      <div className="w-full h-[2px] bg-[#6C63FF] absolute -bottom-1 left-0"></div>
                    )}
                  </a>
                ) : (
                  <Link
                    to={path}
                    className={`cursor-pointer hover:text-[#6C63FF] relative ${
                      location.pathname === path ? "text-[#3F3D56]" : ""
                    }`}
                  >
                    {name}
                    {location.pathname === path && (
                      <div className="w-full h-[2px] bg-[#6C63FF] absolute -bottom-1 left-0"></div>
                    )}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden ml-2">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t px-4 pb-4 space-y-4 text-center">
            {navLinks.map(({ name, path }, i) => (
              <Link
                key={i}
                to={path}
                onClick={() => setMenuOpen(false)}
                className="block text-gray-700 font-medium hover:text-[#6C63FF]"
              >
                {name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
