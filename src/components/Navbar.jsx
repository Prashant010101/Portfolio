import React from "react";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 w-full px-8 py-5 flex justify-between items-center backdrop-blur-lg bg-primary/70 z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-2xl font-bold text-accent">Prashant Jangir</h1>
      <ul className="hidden md:flex gap-8">
        {navLinks.map((link, idx) => (
          <motion.li
            key={idx}
            whileHover={{ scale: 1.1 }}
            className="cursor-pointer hover:text-teal"
          >
            <a href={link.href}>{link.label}</a>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}
