import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  MapPin,
  Phone,
  Mail
} from "lucide-react";

import logo from "../assets/logomain.svg"; // Replace with your actual logo path

const Footer = () => {
  return (
    <footer className="footer-section bg-white px-6 sm:px-10 md:px-16 py-10 text-gray-700">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 items-start">
        {/* Logo & Socials */}
        <div className="space-y-4 text-center md:text-left">
          <img src={logo} alt="Learncraft Logo" className="h-16 mx-auto md:mx-0" />
          <div className="flex justify-center md:justify-start gap-4 mt-4 text-xl text-gray-700">
            <Facebook className="hover:text-blue-600 cursor-pointer" />
            <Twitter className="hover:text-blue-400 cursor-pointer" />
            <Instagram className="hover:text-pink-600 cursor-pointer" />
          </div>
        </div>

        {/* Links */}
        <div className="text-center md:text-left">
          <h3 className="font-semibold text-lg mb-4">Links</h3>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>Mentor</li>
            {/* <li>Group</li> */}
            
          </ul>
        </div>

        {/* Company */}
        <div className="text-center md:text-left">
          <h3 className="font-semibold text-lg mb-4"></h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Testimonials</li>
            <li>Services</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="text-center md:text-left space-y-4 text-sm">
          <div className="flex items-start justify-center md:justify-start gap-2">
            <MapPin className="text-[#4F46E5]" size={18} />
            <p>
              near MSEB Substation, At post,<br />
              Bardapur, Maharashtra 431517
            </p>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <Phone className="text-[#4F46E5]" size={18} />
            <p>089990 21576</p>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <Mail className="text-[#4F46E5]" size={18} />
            <p>learncraftinstitute@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 pt-6 border-t text-xs flex flex-col md:flex-row justify-between text-center text-gray-500">
        <p>©2025 Learncraft Training Institute</p>
        {/* <div className="flex justify-center gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:underline">Privacy policy</a>
          <a href="#" className="hover:underline">Terms & conditions</a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
