/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        screens: {
            'custom-1440': '1440px', // Custom breakpoint for 1080px
            'custom-1600': '1600px', // Custom breakpoint for 1080px
          },
    },
  },
};
