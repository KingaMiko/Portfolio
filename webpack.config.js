const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html", // Ścieżka do Twojego szablonu HTML
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"), // Webpack Dev Server będzie serwował pliki z tego katalogu
    },
    compress: true,
    port: 9000, // Możesz wybrać dowolny port
    open: true, // opcjonalnie, aby automatycznie otwierać przeglądarkę po uruchomieniu serwera
    historyApiFallback: true, // jeśli używasz HTML5 History API (przydatne w SPA)
  },
};
