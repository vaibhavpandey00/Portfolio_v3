/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        robotoMono: "var(--font-roboto-mono)", // Use CSS variable from Next.js font optimization
        workSans: "var(--font-work-sans)",
        inter: "var(--font-inter)",
        blackRiver: "var(--font-black-river)",
      },
      colors: {
        primary: {
          DEFAULT: '#0a192f',
          light: '#112240',
          lighter: '#1a2b4a',
          dark: '#071627',
        },
        accent: {
          DEFAULT: '#ccd6f6',
        },
      },
      backgroundImage: {
        // Custom gradient background
        'primary-gradient': 'linear-gradient(to bottom right, #112240, #0a192f, #071627)',
      },
      backdropBlur: {
        // Custom blur utility
        xs: '2px',
        sm: '4px',
      },
      boxShadow: {
        // Custom glassmorphism shadow
        'glassmorphism': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        // Glassmorphism utility
        '.glassmorphism': {
          'background': 'rgba(255, 255, 255, 0.1)',
          'backdrop-filter': 'blur(10px)',
          'border': '1px solid rgba(255, 255, 255, .1)',
          'box-shadow': '0 8px 32px 0 rgba(31, 38, 135, 0.2)',
        },
        // Hover effect for glassmorphism
        '.glassmorphism-hover:hover': {
          'transform': 'scale(1.05)',
          'background': 'rgba(255, 255, 255, 0.15)',
        }
      };

      addUtilities(newUtilities);
    }
  ],
}