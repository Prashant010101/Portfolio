// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0F172A",   // deep navy
        accent: "#8B5CF6",    // violet
        teal: "#06B6D4",      // cyan/teal
        light: "#F1F5F9",     // soft light background
      },
    },
  },
  plugins: [],
};
