// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        primaryDark: '#2563EB',
        accent: '#14B8A6',
        dark: '#0F172A',
        slateLight: '#E2E8F0',
        cardDark: '#1E293B',
      },
    },
  },
  plugins: [],
};
