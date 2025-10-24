import React from "react";
import ProfilePic from "../assets/tanisha.jpg";
import { ReactTyped } from "react-typed";

const Hero = () => {
  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-between px-20 relative"
    >
      {/* ===== Left Content ===== */}
      <div className="max-w-2xl space-y-6">
        <p className="text-lg text-gray-600">Hello, it's me!</p>

        <h1 className="text-6xl font-extrabold tracking-wide text-gray-900">
          TANISHA THAKUR
        </h1>

        <h2 className="text-2xl font-medium text-gray-800">
          I am a{" "}
          <span className="text-pink-500">
            <ReactTyped
              strings={["Full Stack Developer", "UI/UX Designer", "ML Engineer"]}
              typeSpeed={80}
              backSpeed={50}
              loop
            />
          </span>
        </h2>

        <p className="text-gray-700 leading-relaxed">
          I’m a Computer Science Engineering student focusing on Web Development,
          Artificial Intelligence, and UI/UX Design. I love creating user-centric
          digital experiences that blend creativity and functionality.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Skilled in both front-end and back-end development, I also explore AI
          and ML to build data-driven solutions.
        </p>

        {/* ===== Social Icons ===== */}
        <div className="flex space-x-6 text-2xl mt-6 text-gray-700">
          <a
            href="https://github.com/Tanisha02806"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-transform duration-300 hover:scale-110"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-transform duration-300 hover:scale-110"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=tanishaselfthakur@gmail.com&su=Portfolio%20Inquiry&body=Hello%20Tanisha,%0A%0AI%20just%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.%0A%0ARegards,%0A[Your%20Name]"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-transform duration-300 hover:scale-110"
          >
            <i className="fas fa-envelope"></i>
          </a>

        </div>

        {/* ===== Download CV Button ===== */}
        <a
          href="/src/assets/resume.pdf"
          download="Tanisha_Thakur_Resume.pdf"
          className="inline-block mt-6 px-8 py-3 bg-pink-500 text-white font-semibold rounded-lg shadow-md hover:bg-pink-600 transition-transform duration-300 hover:scale-105"
        >
          Download CV
        </a>
      </div>

      {/* ===== Right Image ===== */}
      <div className="flex justify-center">
        <img
          src={ProfilePic}
          alt="Tanisha Thakur"
          className="w-[28rem] h-[32rem] object-cover rounded-2xl shadow-xl border border-gray-300"
        />
      </div>

      {/* ===== Scroll Down Arrow ===== */}
      <div
        onClick={scrollToProjects}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
      >
        <i className="fas fa-chevron-down text-3xl text-pink-500 hover:text-pink-400 transition-colors duration-300"></i>
      </div>
    </section>
  );
};

export default Hero;
