/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "oxford-blue": "#00072d",
        "penn-blue": "#001c55",
        "royal-blue": "#0A2472",
        "bice-blue": "#0E6BA8",
        "non-photo-blue": "#A6E1FA",
        "orange-cream": "#F7A072",
        cream: "#EDDEA4",
        "light-cream": "#f9f7f3",
      },
    },
  },
  plugins: [],
};
