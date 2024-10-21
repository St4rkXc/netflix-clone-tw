/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./*.html"],
   theme: {
      extend: {
         colors: {
            primary: "#c11119",
            secondary: "#414141",
         },
      },
   },
   daisyui: {
      themes: [
         {
            mytheme: {
               primary: "#c11119",
               secondary: "#414141",
               "base-100": "#000000" /* background image */,
            },
         },
         "dark",
      ],
   },
   theme: {
      container: {
         padding: {
            DEFAULT: "3rem",
            sm: "1rem",
            lg: "8rem",
            xl: "10rem",
            "2xl": "12rem",
         },
      },
   },
   plugins: [require("daisyui")],
};
