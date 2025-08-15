import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/images/profile.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center px-8 pt-20"
    >
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-bold mb-4 leading-tight">
          Hi, I’m <span className="text-accent">Prashant Jangir</span>
        </h1>
        <p className="text-lg text-gray-300 mb-6 max-w-lg">
          Software Engineer | Ruby on Rails & Spring Boot Developer | UI/UX Enthusiast
        </p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          className="px-6 py-3 bg-accent rounded-lg hover:bg-purple-700 transition"
        >
          Contact Me
        </motion.a>
      </motion.div>

      <motion.div
        className="flex-1 flex justify-center mt-8 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={profileImg}
          alt="Prashant Jangir"
          // className="w-64 h-64 rounded-full border-4 border-accent shadow-lg"
          className="w-80 h-80 object-cover rounded-full border-4 border-accent shadow-lg"
        />
      </motion.div>
    </section>
  );
}
