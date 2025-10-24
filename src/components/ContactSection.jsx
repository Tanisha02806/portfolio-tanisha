import React from "react";

const ContactSection = () => {
    return (
        <section
        id="contact"
        className="bg-[#1a1738] py-20 text-white flex justify-center"
        >
        <div className="max-w-6xl w-full flex flex-col md:flex-row justify-between items-start md:items-center px-6 md:px-16 gap-10">
            
            {/* Left Side: Text and Socials */}
            <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl font-semibold">Let’s Connect!</h2>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                If you ever want to grab a coffee/bubble tea (virtually) or just want a quick chat – 
                you can find me on social media or send me a message here!
            </p>

            <div className="flex space-x-6 text-blue-400 text-xl mt-4">
                <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition-transform transform hover:scale-110"
                >
                <i className="fab fa-github"></i>
                </a>
                <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition-transform transform hover:scale-110"
                >
                <i className="fab fa-linkedin"></i>
                </a>
            </div>
            </div>

            {/* Right Side: Form */}
            <form
            action="https://formspree.io/f/xnnqvnyw" // ← replace with your own Formspree endpoint
            method="POST"
            className="md:w-1/2 bg-[#25214a] p-6 rounded-2xl shadow-lg space-y-4"
            >
            <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-3 rounded-lg bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-3 rounded-lg bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                className="w-full p-3 rounded-lg bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>

            <button
                type="submit"
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition shadow-lg hover:shadow-blue-400/50"
            >
                Send Message
            </button>
            </form>
        </div>
        </section>
    );
};

export default ContactSection;
