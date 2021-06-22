const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = {
  entry: "./src/index.js",

  // output: {
  //   publicPath: "http://localhost:8080/",
  // },
  output: {
    path: path.resolve(__dirname, "build"),
    // publicPath: "/",
    filename: "bundle.js",
  },

  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },

  // devServer: {
  //   port: 8080,
  // },
  devServer: {
    contentBase: "./build",
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  devtool: "inline-source-map",

  plugins: [
    new ModuleFederationPlugin({
      name: "chat",
      library: { type: "var", name: "chat" },
      filename: "remoteEntry.js",
      remotes: {},
      exposes: { "./Chat": "./src/Chat" },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: path.resolve("./src/index.html"),
    }),
  ],
};
