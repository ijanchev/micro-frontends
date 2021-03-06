const commonConfig = require("./webpack.common");
const packageJson = require("../package.json");
const { merge } = require("webpack-merge");
const ModuleFederationWebpackPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const devConfig = {
  mode: "development",
  output: {
    publicPath: "http://localhost:8080/",
  },
  devServer: {
    port: 8080,
    historyApiFallback: {
      index: "/index.html",
    },
  },
  plugins: [
    new ModuleFederationWebpackPlugin({
      name: "ContainerApp",
      remotes: {
        marketing: "MarketingApp@http://localhost:8081/remoteEntry.js",
        auth: "AuthApp@http://localhost:8082/remoteEntry.js",
        dashboard: "DashboardApp@http://localhost:8083/remoteEntry.js",
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
