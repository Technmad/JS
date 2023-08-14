const path = require("path");
const plugin = require("html-webpack-plugin");
module.exports = {
  // entry: "./src/index.js",
  entry: {
    index: "./src/index.js",
    print: "./src/print.js",
  },

  plugins: [
    new plugin({
      title: "Output Management",
    }),
  ],

  output: {
    // filename: "main.js",
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
