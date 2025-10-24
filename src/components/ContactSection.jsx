import React from "react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="bg-gray-50 py-20 flex justify-center rounded-3xl shadow-2xl"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row justify-between items-start md:items-center px-6 md:px-16 gap-10">
        
        {/* Left Side: Text and Socials */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl font-semibold text-gray-900">Let’s Connect!</h2>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            If you ever want to grab a coffee/bubble tea (virtually) or just want a quick chat – 
            you can find me on social media or send me a message here!
          </p>

          <div className="flex space-x-6 text-pink-500 text-xl mt-4">
            <a
              href="https://github.com/Tanisha02806"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-transform transform hover:scale-110"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/tanisha-thakur-6372912b3/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-400 transition-transform transform hover:scale-110"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>

        {/* Right Side: Form */}
        <form
          action="https://formspree.io/f/xnnqvnyw"
          method="POST"
          className="md:w-1/2 bg-pink-100 p-8 rounded-3xl shadow-2xl space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-4 rounded-2xl bg-white text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-4 rounded-2xl bg-white text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-4 rounded-2xl bg-white text-gray-900 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400"
          ></textarea>

          <button
            type="submit"
            className="px-6 py-3 bg-pink-500 text-white rounded-2xl hover:bg-pink-600 transition shadow-lg hover:shadow-pink-400/50"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
