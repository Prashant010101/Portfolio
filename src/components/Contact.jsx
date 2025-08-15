import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="bg-light py-16 text-primary">
      <motion.h2
        className="text-4xl font-bold text-center text-accent mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>

      {/* PLACEHOLDER — You'll need a backend or service like Formspree */}
      <motion.form
        action="https://formspree.io/f/xeozdvje" // <-- Paste Your Formspree ID here!
        method="POST"
        className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none"
          required
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          className="px-6 py-3 bg-accent text-white rounded-md"
        >
          Send Message
        </motion.button>
      </motion.form>
    </section>
  );
}
