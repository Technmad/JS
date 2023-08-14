const path = require("path");

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
    ],
  },
};
