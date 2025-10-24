import React, { useState } from "react";
import Logo from "../assets/Portfolio.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Smooth scroll function without changing URL
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // close mobile menu
  };

  const openResume = () => {
    window.open("/src/assets/resume.pdf", "_blank");
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md text-gray-900 shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-16 py-4">
        {/* Logo */}
        <div>
          <img src={Logo} alt="Portfolio Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-10 text-sm font-medium">
          <li>
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-900 hover:text-pink-500 transition-colors duration-300"
            >
              HOME
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-900 hover:text-pink-500 transition-colors duration-300"
            >
              PROJECTS
            </button>
          </li>
          <li>
            <button
              onClick={openResume}
              className="text-gray-900 hover:text-pink-500 transition-colors duration-300"
            >
              RESUME
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-900 hover:text-pink-500 transition-colors duration-300"
            >
              CONTACT
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <i className="fas fa-bars text-2xl text-gray-900 hover:text-pink-500 transition-colors duration-300"></i>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center bg-white border-t border-gray-200 py-4 space-y-4 text-sm font-medium animate-fadeIn shadow-lg">
          <li>
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-900 hover:text-pink-500 transition-colors duration-300"
            >
              HOME
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-gray-900 hover:text-pink-500 transition-colors duration-300"
            >
              PROJECTS
            </button>
          </li>
          <li>
            <button
              onClick={openResume}
              className="text-gray-900 hover:text-pink-500 transition-colors duration-300"
            >
              RESUME
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-900 hover:text-pink-500 transition-colors duration-300"
            >
              CONTACT
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
