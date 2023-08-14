const path = require("path");
const plugin = require("html-webpack-plugin");
module.exports = {
  // entry: "./src/index.js",
  mode: "development",
  entry: {
    index: "./src/index.js",
    print: "./src/print.js",
  },

  devtool: "inline-source-map",
  plugins: [
    new plugin({
      title: "devlopment",
    }),
  ],

  output: {
    // filename: "main.js",
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
