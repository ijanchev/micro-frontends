const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");
const { merge } = require("webpack-merge");
const ModuleFederationWebpackPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/dashboard/latest/",
  },
  plugins: [
    new ModuleFederationWebpackPlugin({
      name: "DashboardApp",
      filename: "remoteEntry.js",
      exposes: {
        "./api": "./src/bootstrap",
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
