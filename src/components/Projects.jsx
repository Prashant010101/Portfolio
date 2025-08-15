import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Clinic Management App",
    tech: "Electron, Node.js, ReactJS, MongoDB Atlas",
    desc: "Offline-capable full-stack Clinic Management Software with real-time notifications and role-based access control."
  },
  {
    title: "Offline-First React Web App",
    tech: "ReactJS, Service Workers, IndexedDB",
    desc: "Offline React app with background data sync, ensuring uninterrupted UX."
  }
];

export default function Projects() {
  return (
    <section id="projects" className="bg-primary py-16 text-white">
      <motion.h2
        className="text-4xl font-bold text-center text-accent mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {projects.map((p, idx) => (
          <motion.div
            key={idx}
            className="bg-primary/40 backdrop-blur-lg p-6 rounded-lg shadow-lg border border-white/10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-semibold text-teal mb-2">{p.title}</h3>
            <p className="text-sm text-gray-300 italic">{p.tech}</p>
            <p className="mt-3 text-gray-300">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
