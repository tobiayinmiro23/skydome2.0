/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx}"],
  // "./src/**/*.{js,jsx,ts,tsx}",
  theme: {
    extend: {
      keyframes: {
         Bounce: {
          '0%, 80%,100%':{
            transform: 'scale(0)'
          },
          '40%': {
            transform: 'scale(1)'
          }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        'spin-slow': 'Bounce 3s linear infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
      }

    },
  },
  plugins: [],
}

