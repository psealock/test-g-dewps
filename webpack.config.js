const DependencyExtractionWebpackPlugin = require("@wordpress/dependency-extraction-webpack-plugin");
const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const config = {
  ...defaultConfig,
  plugins: [
    ...defaultConfig.plugins.filter(
      (plugin) =>
        plugin.constructor.name !== "DependencyExtractionWebpackPlugin"
    ),
    new DependencyExtractionWebpackPlugin({
      defaultDependencies: ["apples", "oranges", "bananas"],
    }),
  ],
};

module.exports = config;
