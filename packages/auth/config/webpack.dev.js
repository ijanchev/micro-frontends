const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");
const { merge } = require("webpack-merge");
const ModuleFederationWebpackPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const devConfig = {
  mode: "development",
  //public path set in dev mode, to proper loading of the js files
  output: {
    publicPath: "http://localhost:8082/",
  },
  devServer: {
    port: 8082,
    historyApiFallback: {
      index: "/index.html",
    },
  },
  plugins: [
    new ModuleFederationWebpackPlugin({
      name: "AuthApp",
      filename: "remoteEntry.js",
      exposes: {
        "./api": "./src/bootstrap",
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
