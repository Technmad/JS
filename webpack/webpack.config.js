const path = require("path");
const toml = require("toml");
const yaml = require("yamljs");
const json5 = require("json5");

module.exports = {
  entry: "./src/index.js",
  output: {
    // filename: "main.js",
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },

  module: {
    rules: [
      // load css style
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      //load images
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      // load fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      // csv & xml loader
      {
        test: /\.(csv|tsv)$/i,
        use: "asset/resource",
      },
      {
        test: /\.xml$/i,
        use: ["xml-loader"],
      },
      // toml
      {
        test: /\.toml$/i,
        type: "json",
        parser: {
          parse: toml.parse,
        },
      },
      // yaml
      {
        test: /\.yaml$/i,
        type: "json",
        parser: {
          parse: yaml.parse,
        },
      },
      // jason5
      {
        test: /\.json5$/i,
        type: "json",
        parser: {
          parse: json5.parse,
        },
      },
    ],
  },
};
