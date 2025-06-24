/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        spacing: () => {
            const spacing: {
                [key: string]: string;
            } = {};

            for (let i = 0; i <= 3; i += 0.125) {
                spacing[i] = `${i}rem`;
            }
            for (let i = 1; i <= 25; i += 0.25) {
                spacing[i] = `${i}rem`;
            }

            spacing["navHeight"] = "5rem";

            return spacing;
        },
        borderRadius: () => {
            const borderRadius: {
                [key: string]: string;
            } = {};

            for (let i = 0; i <= 1; i += 0.125) {
                borderRadius[i] = `${i}rem`;
            }
            for (let i = 1; i <= 3; i += 0.25) {
                borderRadius[i] = `${i}rem`;
            }

            borderRadius["none"] = `0`;
            borderRadius["full"] = `9999px`;

            return borderRadius;
        },
        fontSize: () => {
            const fontSize: {
                [key: string]: string;
            } = {};

            for (let i = 0; i <= 2; i += 0.125) {
                fontSize[i] = `${i}rem`;
            }

            for (let i = 2; i <= 10; i += 0.25) {
                fontSize[i] = `${i}rem`;
            }

            return fontSize;
        },
        lineHeight: () => {
            const lineHeight: {
                [key: string]: string;
            } = {};

            for (let i = 0; i <= 5; i += 0.125) {
                lineHeight[i] = `${i}`;
            }

            lineHeight["navHeight"] = "4rem";
            return lineHeight;
        },
        extend: {
            minHeight: () => {
                const minHeight: {
                    [key: string]: string;
                } = {};

                for (let i = 0; i <= 3; i += 0.125) {
                    minHeight[i] = `${i}rem`;
                }
                for (let i = 1; i <= 25; i += 0.25) {
                    minHeight[i] = `${i}rem`;
                }

                minHeight["0"] = "0";
                minHeight["navHeight"] = "4rem";

                return minHeight;
            },
            minWidth: () => {
                const minWidth: {
                    [key: string]: string;
                } = {};

                for (let i = 0; i <= 3; i += 0.125) {
                    minWidth[i] = `${i}rem`;
                }
                for (let i = 1; i <= 25; i += 0.25) {
                    minWidth[i] = `${i}rem`;
                }

                minWidth["0"] = "0";
                minWidth["navHeight"] = "4rem";

                return minWidth;
            },

            colors: {
                transparent: "transparent",
                white: "#fff",
                black: "#000",
                primary: {
                    100: "hsl(200deg, 100%, 90%)",
                    200: "hsl(200deg, 100%, 80%)",
                    300: "hsl(200deg, 100%, 70%)",
                    400: "hsl(200deg, 100%, 60%)",
                    DEFAULT: "hsl(200deg, 100%, 50%)",
                    600: "hsl(200deg, 100%, 40%)",
                    700: "hsl(200deg, 100%, 30%)",
                    800: "hsl(200deg, 100%, 20%)",
                    900: "hsl(200deg, 100%, 10%)",
                },

                gray: {
                    50: "hsl(200deg, 5%, 95%)",
                    100: "hsl(200deg, 5%, 90%)",
                    200: "hsl(200deg, 5%, 80%)",
                    300: "hsl(200deg, 5%, 70%)",
                    400: "hsl(200deg, 5%, 60%)",
                    500: "hsl(200deg, 5%, 50%)",
                    600: "hsl(200deg, 5%, 40%)",
                    700: "hsl(200deg, 5%, 30%)",
                    800: "hsl(200deg, 5%, 20%)",
                    900: "hsl(200deg, 5%, 10%)",
                },
            },

            boxShadow: {
                "halo-primary": "0px 0px 0px 3px hsla(200deg, 100%, 50%, 0.5)",
                "halo-gray-500": "0px 0px 0px 3px hsl(200deg, 5%, 50%, 0.5)",
                cta: "0px 8px 20px 0px hsl(200deg, 100%, 50%, 40%)",
            },
        },

        fontFamily: {
            sans: ["Montserrat", ...defaultTheme.fontFamily.sans],
        },
    },
    plugins: [],
};
