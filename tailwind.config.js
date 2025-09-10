/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/app/**/*.{js,jsx,ts,tsx}",
      "./src/components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        screens: {
          ipadlandscape: { raw: "(min-device-width: 1024px) and (orientation: landscape)" },
          ipadportrait: { raw: "(min-device-width: 1024px) and (orientation: portrait)" },
        },
      },
    },
    plugins: [],
  };
  