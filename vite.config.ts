import { defineConfig } from "vite";

const { resolve } = require("path");

module.exports = defineConfig({
  base: "/Sports_Fan_Misery/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        sources: resolve(__dirname, "sources.html"),
      },
    },
  },
});
