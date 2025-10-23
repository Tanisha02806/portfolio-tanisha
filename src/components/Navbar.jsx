import React, { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleHomeClick = (e) => {
        e.preventDefault();
        window.location.reload(); // refreshes the page
    };

    return (
        <nav className="fixed top-0 left-0 w-full bg-[#1e1b3c]/90 backdrop-blur-md text-white shadow-md z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-16 py-4">
            {/* Logo */}
            <h1 className="text-2xl font-semibold tracking-wide">Portfolio</h1>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-10 text-sm font-medium">
            {["HOME", "PROJECTS", "RESUME", "CONTACT"].map((item) => (
                <li key={item}>
                {item === "HOME" ? (
                    <a
                    href="#home"
                    onClick={handleHomeClick}
                    className="hover:text-blue-400 transition-colors duration-300"
                    >
                    {item}
                    </a>
                ) : (
                    <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-blue-400 transition-colors duration-300"
                    >
                    {item}
                    </a>
                )}
                </li>
            ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
            >
            <i className="fas fa-bars text-2xl"></i>
            </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
            <ul className="md:hidden flex flex-col items-center bg-[#1e1b3c]/95 border-t border-gray-700 py-4 space-y-4 text-sm font-medium animate-fadeIn">
            {["HOME", "PROJECTS", "RESUME", "CONTACT"].map((item) => (
                <li key={item}>
                {item === "HOME" ? (
                    <a
                    href="#home"
                    onClick={(e) => {
                        e.preventDefault();
                        setIsOpen(false);
                        window.location.reload();
                    }}
                    className="hover:text-blue-400 transition-colors duration-300"
                    >
                    {item}
                    </a>
                ) : (
                    <a
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-blue-400 transition-colors duration-300"
                    >
                    {item}
                    </a>
                )}
                </li>
            ))}
            </ul>
        )}
        </nav>
    );
};

export default Navbar;
