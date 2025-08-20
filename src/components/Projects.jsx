import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Clinic Management App",
    tech: "Electron, Node.js, ReactJS, MongoDB Atlas",
    desc: "Offline-capable full-stack Clinic Management Desktop Software with real-time notifications and role-based access control.",
    github: [
      {
        label: "Frontend",
        url: "https://github.com/Prashant010101/ClinicAPP_frontend",
      },
      {
        label: "Backend",
        url: "https://github.com/Prashant010101/ClinicAPP_backend",
      },
    ],
  },
  {
    title: "Offline-First React Web App",
    tech: "ReactJS, Service Workers, IndexedDB",
    desc: "Offline React app with background sync for seamless user experience.",
    github: "https://github.com/Prashant010101/Offline-web-app",
  },
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
            className="bg-primary/40 p-6 rounded-lg shadow-lg border border-white/10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-2xl font-semibold text-teal mb-2">{p.title}</h3>
            <p className="text-sm text-gray-300 italic">{p.tech}</p>
            <p className="mt-3 text-gray-300">{p.desc}</p>

            {/* Fix: handle 'github' as either string or array */}
            {p.github && (
              <div className="mt-4 flex flex-wrap gap-4">
                {Array.isArray(p.github) ? (
                  p.github.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      className="text-teal hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  ))
                ) : (
                  <a
                    href={p.github}
                    className="text-teal hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
