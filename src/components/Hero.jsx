import React from "react";
import ProfilePic from "../assets/tanisha.jpg";
import { ReactTyped } from "react-typed";

const Hero = () => {
    return (
        <section
        id="home"
        className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-16 bg-gradient-to-br from-[#1b1833] via-[#252056] to-[#312d75] text-white overflow-hidden"
        >
        {/* Left Text Section */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
            <p className="text-lg text-gray-300">Hello It's ME!</p>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-wide">
            TANISHA THAKUR
            </h1>

            <p className="text-xl">
            I am a{" "}
            <span className="text-blue-400">
                <ReactTyped
                strings={["Full Stack Developer", "UI/UX Designer", "ML Engineer"]}
                typeSpeed={80}
                backSpeed={50}
                loop
                />
            </span>
            </p>

            <div className="space-y-3 text-gray-300 text-sm md:text-base leading-relaxed">
            <p>
                I am a dedicated Computer Science Engineering student specializing
                in Web Development, Artificial Intelligence, and UI/UX Design. I
                enjoy transforming ideas into scalable, responsive, and
                user-centric digital solutions that seamlessly blend functionality
                with aesthetics.
            </p>

            <p>
                On the technical side, I have hands-on experience in front-end and
                back-end frameworks. Alongside web development, I actively explore
                AI and Machine Learning.
            </p>

            <p>
                With a strong interest in UI/UX design, I leverage tools like Figma
                and Canva to create intuitive, visually engaging interfaces that
                prioritize user experience.
            </p>
            </div>

            {/* ===== Social Icons ===== */}
            <div className="flex space-x-6 mt-6 text-xl">
            <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-transform duration-300 hover:scale-110"
            >
                <i className="fab fa-github"></i>
            </a>

            <a
                href="https://linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-transform duration-300 hover:scale-110"
            >
                <i className="fab fa-linkedin"></i>
            </a>

            <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=tanishaselfthakur@gmail.com&su=Portfolio%20Inquiry&body=Hello%20Tanisha,%0A%0AI%20just%20viewed%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you.%0A%0ARegards,%0A[Your%20Name]"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-transform duration-300 hover:scale-110"
                >
                <i className="fas fa-envelope"></i>
            </a>

            </div>


            {/* Download CV Button */}
            <a
            href="/src/assets/resume.pdf"
            className="inline-block mt-6 px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-transform duration-300 hover:scale-105"
            >
            Download CV
            </a>
        </div>

        {/* Right Image Section */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
            <img
            src={ProfilePic}
            alt="Tanisha Thakur"
            className="w-[22rem] h-[26rem] md:w-[28rem] md:h-[32rem] object-cover rounded-2xl shadow-2xl border-4 border-blue-400/70"
            />
        </div>
        </section>
    );
};

export default Hero;
