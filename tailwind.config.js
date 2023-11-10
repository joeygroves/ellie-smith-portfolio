/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js, jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        white: "#F2EFF2",
        lavender: "#AE9FD0",
        green: "#519E8A",
        yellow: "#FFCA3A",
        black: "#14080E"
      },
      backgroundImage: (theme) => ({
        purple: "#A875BA"
      }),
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        abel: ["Abel", "sans-serif"]
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    }
  },
  plugins: [],
}

