/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F1216', // Noir principal
        asphalt: '#1A1F26', // Gris asphalte
        secondary: '#00C896', // Vert RideTogether
        light: '#F4F6F8', // Blanc cassé
        'text-secondary': '#B5BCC6', // Gris texte secondaire
      },
      fontFamily: {
        sans: ['Poppins', 'Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

