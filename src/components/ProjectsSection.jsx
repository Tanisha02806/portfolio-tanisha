import React, { useState } from "react";
import Project1 from "../assets/project_images/Project1.png";

const projects = [
  {
    title: "Plant Disease Detection System",
    description:
      "An AI-powered plant disease detection web application built with Streamlit, TensorFlow (Keras), and FPDF. This system allows farmers, researchers, and agriculture enthusiasts to upload or capture leaf images, detect plant diseases using a trained CNN model, and download detailed PDF reports. It also keeps a prediction history and includes a feedback submission feature.",
    tech: ["Python 3.9+", "Streamlit", "TensorFlow/Keras", "NumPy", "Pandas", "FPDF"],
    images: Project1,
    github: "https://github.com/Tanisha02806/Plant_Disease_Detection_System_Streamlit",
    color: "bg-white",
  },
  // {
  //   title: "Project Two",
  //   shortDesc: "A brief description of Project Two.",
  //   description:
  //     "Project Two focuses on AI-driven analytics for better data visualization and decision-making. It uses advanced algorithms and provides an elegant dashboard experience.",
  //   tech: ["Python", "TensorFlow", "Streamlit"],
  //   images: "/assests/project_images/project2.png",
  //   github: "#",
  //   live: "#",
  //   color: "bg-white",
  // },
  // {
  //   title: "Project Three",
  //   shortDesc: "A brief description of Project Three.",
  //   description:
  //     "Project Three is a sleek e-commerce platform offering real-time inventory tracking and secure payment integration for a smooth shopping experience.",
  //   tech: ["Next.js", "Firebase", "TailwindCSS"],
  //   images: "/assests/project_images/project3.png",
  //   github: "#",
  //   live: "#",
  //   color: "bg-white",
  // },
];

export default function ProjectsSection() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="py-28">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-5xl font-bold text-center mb-20 text-gray-900">
          My Projects
        </h2>

        <div className="space-y-24">
          {projects.map((proj, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-12 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* === Image Section === */}
              <div
                className={`md:w-1/2 w-full transform transition duration-500 hover:scale-[1.03] ${proj.color} rounded-2xl shadow-lg`}
              >
                <img
                  src={proj.images}
                  alt={proj.title}
                  className="w-full h-full object-cover rounded-2xl border border-gray-200"
                />
              </div>

              {/* === Text Section === */}
              <div className="md:w-1/2 space-y-4">
                <h3 className="text-3xl font-semibold text-gray-900">
                  {proj.title}
                </h3>
                <p className="text-gray-700 text-lg">{proj.shortDesc}</p>
                <p className="text-gray-600 leading-relaxed">{proj.description}</p>

                <p className="mt-4 font-semibold text-gray-700">Tech Stack:</p>
                <ul className="flex flex-wrap gap-3 text-gray-700">
                  {proj.tech.map((tech, i) => (
                    <li
                      key={i}
                      className="bg-gray-200 px-3 py-1 rounded-full text-sm border border-gray-300"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="flex gap-4 mt-6">
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition"
                  >
                    GITHUB
                  </a>
                  <a
                    href={proj.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-400 transition"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
