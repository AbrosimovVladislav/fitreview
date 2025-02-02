/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				orange: {
					400: "#f99e16",
					600: "#ea4f0c",
				},
				yellow: {
					400: "#fad415",
					600: "#eaaa08",
				},
				blue: {
					400: "#3b99f6",
					600: "#2553eb",
				},
				green: {
					400: "#10b98c",
					600: "#04784f",
				},
				black: {
					DEFAULT: "#000",
					100: "#1E1E2D",
					200: "#232533",
				},
				gray: {
					10: "#ebebf1",
					100: "#CDCDE0",
					300: "rgba(205,205,224,0.76)",
					700: "#7E92A2"
				},
			},
			fontFamily: {
				bebas: ["BebasNeue-Regular", "sans-serif"],
				montserrat: ["Montserrat", "sans-serif"], // Один ключ для всех начертаний Montserrat
			},
		},
	},
	plugins: [],
};
