import React from "react";
import { motion } from "framer-motion";

const skills = [
  "Ruby", "Java", "C", "C++", "C#", "SQL", "JavaScript (ES6+)",
  "HTML5", "CSS3", "Ruby on Rails", "Spring Boot",
  "Hibernate", "Node.js", "ReactJS", "Electron",
  "PostgreSQL", "MySQL", "Git", "Postman", "Swagger",
  "Firebase Cloud Messaging", "OAuth", "Sidekiq", "Ransack", "JDBC"
];

export default function Skills() {
  return (
    <section id="skills" className="bg-light py-16 text-primary">
      <motion.h2
        className="text-4xl font-bold text-center text-accent mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            className="bg-white p-4 rounded-lg shadow-md text-center font-medium"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.03 }}
            whileHover={{ scale: 1.05 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
