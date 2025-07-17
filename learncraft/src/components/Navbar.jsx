import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logomain from "../assets/logomain.svg";
// import { useTheme } from "../ThemeContext";

const Navbar = () => {
  // const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  // const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  // useEffect(() => {
  //   const saved = localStorage.getItem("theme");
  //   if (saved === "dark") {
  //     setDarkMode(true);
  //     document.documentElement.classList.add("dark");
  //   }
  // }, []);

  // useEffect(() => {
  //   if (darkMode) {
  //     document.documentElement.classList.add("dark");
  //     localStorage.setItem("theme", "dark");
  //   } else {
  //     document.documentElement.classList.remove("dark");
  //     localStorage.setItem("theme", "light");
  //   }
  // }, [darkMode]);

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
      <nav className="w-full bg-white shadow-md transition-colors duration-300">
        <div className="max-w-7xl mx-auto py-4 flex justify-between items-center">
          <img src={logomain} alt="Logo" className="h-16 w-80 object-contain" />

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-6 text-gray-700 font-medium mx-auto">
            {navLinks.map(({ name, path }, i) => (
              <li key={i}>
                {path.startsWith("/#") ? (
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
