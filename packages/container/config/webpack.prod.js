const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");
const { merge } = require("webpack-merge");
const ModuleFederationWebpackPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/container/latest/",
  },
  plugins: [
    new ModuleFederationWebpackPlugin({
      name: "ContainerApp",
      remotes: {
        marketing: `MarketingApp@${domain}/marketing/latest/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);
