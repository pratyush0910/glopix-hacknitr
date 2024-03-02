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
<<<<<<< HEAD
      fontFamily: {
        navtxt: ["titlefont", "monospacce"],
      },
=======
      boxShadow:{
        '3xl':' 0 25px 50px rgb(63, 81, 181)'
      }
>>>>>>> 6c1357640a3576c272eeccad4bf603dd17954f71
    },
  },
  plugins: [],
};
