import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logomain from "../assets/logomain.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = ["Home", "Courses", "Authors", "Group", "Testimonial", "Blog"];

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={logomain} alt="Logo" className="h-16 w-80 object-contain" />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          {navLinks.map((link, i) => (
            <li
              key={i}
              className={`cursor-pointer hover:text-[#6C63FF] relative ${
                link === "Home" ? "text-[#3F3D56]" : ""
              }`}
            >
              {link}
              {link === "Home" && (
                <div className="w-full h-[2px] bg-[#6C63FF] absolute -bottom-1 left-0"></div>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-3">
          <button className="bg-[#6C63FF] text-white px-6 py-2 rounded-full font-semibold hover:opacity-90 transition">
            Sign In
          </button>
          <button className="bg-[#EAE6FF] text-[#6C63FF] px-6 py-2 rounded-full font-semibold hover:opacity-90 transition">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden">
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 pb-4 space-y-4">
          {navLinks.map((link, i) => (
            <p key={i} className="text-gray-700 font-medium hover:text-[#6C63FF]">
              {link}
            </p>
          ))}
          <div className="flex flex-col gap-2 mt-4">
            <button className="bg-[#6C63FF] text-white px-4 py-2 rounded-full font-semibold">
              Sign In
            </button>
            <button className="bg-[#EAE6FF] text-[#6C63FF] px-4 py-2 rounded-full font-semibold">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
