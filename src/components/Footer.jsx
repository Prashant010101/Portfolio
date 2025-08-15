import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-primary py-6 text-center text-gray-400 border-t border-white/10">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        © {new Date().getFullYear()} Prashant Jangir — All rights reserved
      </motion.p>
    </footer>
  );
}
