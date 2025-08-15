import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Junior Software Developer",
    company: "Deeporion Technology",
    period: "Jan 2024 – Dec 2024",
    desc: [
      "Developed 105+ RESTful APIs improving scalability and decreasing response time by 30%.",
      "Integrated FCM for real-time push notifications.",
      "Implemented OAuth + JWT authentication for 1,500+ users.",
      "Optimized PostgreSQL queries, reducing latency by 35%.",
      "Collaborated with frontend teams for smooth API integration."
    ]
  },
  {
    role: "Java Developer Intern",
    company: "Octanet Services Pvt Ltd",
    period: "Dec 2023 – Jan 2024 (Remote)",
    desc: [
      "Built secure Bank Management System with CRUD operations and PIN authentication.",
      "Used JDBC + MySQL for transactions and data consistency.",
      "Developed GUIs using Java Swing and AWT."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="bg-light py-16 text-primary">
      <motion.h2
        className="text-4xl font-bold text-center text-accent mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>

      <div className="max-w-4xl mx-auto space-y-10">
        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold">{exp.role}</h3>
            <p className="text-teal">{exp.company} • {exp.period}</p>
            <ul className="list-disc pl-6 mt-2 space-y-1 text-gray-700">
              {exp.desc.map((d, i) => <li key={i}>{d}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
