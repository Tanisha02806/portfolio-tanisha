import React, { useState } from 'react';

const projects = [
    {
        title: "Project One",
        shortDesc: "A brief description of Project One.",
        description:
            "Project One is a comprehensive application that allows users to manage their tasks efficiently. It features a user-friendly interface, real-time collaboration, and seamless integration with other productivity tools.",
        tech: ["React", "Node.js", "MongoDB"],
        images: "/assests/project_images/project1.png",
        github: "#",
        live: "#",
        color: "bg-indigo-700",
    },
    {
        title: "Project One",
        shortDesc: "A brief description of Project One.",
        description:
            "Project One is a comprehensive application that allows users to manage their tasks efficiently. It features a user-friendly interface, real-time collaboration, and seamless integration with other productivity tools.",
        tech: ["React", "Node.js", "MongoDB"],
        images: "/assests/project_images/project1.png",
        github: "#",
        live: "#",
        color: "bg-indigo-700",
    },
    {
        title: "Project One",
        shortDesc: "A brief description of Project One.",
        description:
            "Project One is a comprehensive application that allows users to manage their tasks efficiently. It features a user-friendly interface, real-time collaboration, and seamless integration with other productivity tools.",
        tech: ["React", "Node.js", "MongoDB"],
        images: "/assests/project_images/project1.png",
        github: "#",
        live: "#",
        color: "bg-indigo-700",
    },
];

export default function ProjectsSection() {
    const [selected, setSelected] = useState(null);

    return (
        <section
            id="projects"
            className="py-20 bg-[#0b0220] text-white">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-10">My Projects</h2>

                {/* === Grid of Project Cards === */}
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((proj, index) => (
                        <div
                            key={index}
                            className={`rounded-2xl p-6 shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 ${proj.color}`}
                            onClick={() => setSelected(proj)}
                        >
                            <h3 className="text-2xl font-semibold mb-2">{proj.title}</h3>
                            <p className="text-sm opacity-80">{proj.shortDesc}</p>
                        </div>
                    ))}
                </div>

                {/* == Dialog Box === */}
                {selected && (
                    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-6">
                        <div className="bg-[#150c2e] rounded-2xl max-w-3xl w-full p-6 relative shadow-xl">
                            {/* Close Button */}
                            <button
                                className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
                                onClick={() => setSelected(null)}
                            >
                                X
                            </button>

                            {/* Content */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="text-2xl font-semibold mb-3">
                                        {selected.title}
                                    </h3>
                                    <p className="mb-3 text-gray-300">{selected.description}</p>
                                    <p className="font-semibold mt-2">Tech Stack:</p>
                                    <ul className="list-disc list-inside text-gray-400 mb-4">
                                        {selected.tech.map((t, i) => (
                                            <li key={i}>{t}</li>
                                        ))}
                                    </ul>
                                    <div className="flex gap-4">
                                        <a 
                                            href={selected.live} 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-indigo-600 px-4 py-2 rounded-lg hover:bg-indigo-500 transition"
                                        >
                                            Live Demo
                                        </a>
                                        <a 
                                            href={selected.github} 
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-gray-400 px-4 py-2 rounded-lg hover:bg-gray-800 transition"
                                        >
                                            GitHub
                                        </a>
                                    </div>
                                </div>

                                <div>
                                    <img 
                                        src={selected.image} 
                                        alt={selected.title}
                                        className="w-full h-64 object-cover rounded-lg border border-gray-700"
                                    />
                                </div>
                            </div> 
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};