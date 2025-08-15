import React from "react";
import { motion } from "framer-motion";

const achievements = [
  "Oracle Certified Java Programmer",
  "Octanet Java Developer Certification",
  "Deloitte Virtual Internship — Enterprise Software Development",
  "Hackathon Runner-Up — Innovation & Teamwork"
];

export default function Achievements() {
  return (
    <section id="achievements" className="bg-primary py-16 text-white">
      <motion.h2
        className="text-4xl font-bold text-center text-accent mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Achievements
      </motion.h2>

      <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-6">
        {achievements.map((a, idx) => (
          <motion.div
            key={idx}
            className="bg-primary/40 backdrop-blur-lg p-4 rounded-lg border border-white/10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            {a}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
