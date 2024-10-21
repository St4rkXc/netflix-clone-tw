/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [],
   theme: {
      extend: {
			colors:{
				primary:"#c11119",
				secondary:"#414141",
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
   plugins: [require("daisyui")],
};
