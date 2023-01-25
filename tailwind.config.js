module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "node_modules/mantine/**/*.{js,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.18)",
        "file-upload": "#F1EEE9",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
  corePlugins: {
    preflight: false
  }
};
