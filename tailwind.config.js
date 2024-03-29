module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        black: {
          900: "#000000",
          "900_7f": "#0000007f",
          "900_7e": "#0000007e",
          "900_3f": "#0000003f",
          "900_87": "#00000087",
          "900_01": "#0d0d0d",
          "900_66": "#00000066",
          "900_02": "#030406",
          "900_4c": "#0000004c",
          "900_0a": "#0000000a",
          "900_0c": "#0000000c",
          "900_75": "#00000075",
          "900_99": "#00000099",
          "900_33": "#00000033",
          "900_19": "#00000019",
        },
        gray: {
          50: "#f9f9f9",
          100: "#f5f5f5",
          200: "#f0f0f0",
          400: "#b0b1b1",
          800: "#4d4d4d",
          900: "#191919",
          "50_01": "#fcfcfc",
          "50_7e": "#f9f9f97e",
          "50_99": "#f9f9f999",
        },
        red: { 300: "#e07575", 500: "#ff4433", 600: "#db4444" },
        blue: { A700: "#335fff" },
        blue_gray: {
          100: "#cbe4e8",
          "100_01": "#d9d9d9",
          "100_75": "#d9d9d975",
          "100_e5": "#d9d9d9e5",
        },
        green: { A400: "#00ff66", A400_90: "#00ff6690" },
        yellow: { 400: "#eeff61" },
        pink: { A100: "#eb7ea8" },
        deep_orange: { 600: "#f74316", A700: "#fa1214" },
        purple: { A700: "#8910f1" },
        teal: { 900: "#184947" },
        orange: { A200: "#ffad33" },
        white: { A700_87: "#ffffff87", A700: "#ffffff" },
        indigo: { 200: "#a0bce0", A700: "#3353ff" },
      },
      boxShadow: {
        bs: "0px 4px  4px 0px #0000003f",
        bs1: "0px 1px  13px 0px #0000000c",
        bs2: "0px 2px  10px 2px #00000033",
        bs3: "0px 4px  20px 10px #00000019",
      },
      fontFamily: { poppins: "Poppins", inter: "Inter", nunito: "Nunito" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
