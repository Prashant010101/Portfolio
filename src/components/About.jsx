// src/components/About.jsx
import React from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/images/profile.jpg"; // Replace with your image

export default function About() {
  return (
    <section id="about" className="py-16 bg-[#F1F5F9]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.h2
          className="text-4xl font-bold text-center text-[#8B5CF6] mb-12"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              I’m Prashant Jangir, a Software Engineer from Jaipur, India, with over
              a year of professional experience in Ruby on Rails, Spring Boot, and
              full-stack development. My expertise spans both frontend and backend
              technologies, enabling me to craft scalable, user-focused applications.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              I excel at designing RESTful APIs, building secure applications, and
              collaborating in Agile environments. I blend technical skill with a
              passion for elegant UI/UX design, ensuring seamless, impactful solutions.
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              <a
                href="https://www.linkedin.com/in/prashant-jangir"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-md bg-[#8B5CF6] text-white hover:bg-[#7C3AED] transition"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Prashant010101"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-md bg-[#06B6D4] text-white hover:bg-[#0891B2] transition"
              >
                GitHub
              </a>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={profileImage}
              alt="Prashant Jangir"
              className="rounded-xl shadow-lg w-72 h-72 object-cover border-4 border-[#8B5CF6]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
