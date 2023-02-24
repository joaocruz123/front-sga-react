/* config-overrides.js */

const customRules = require('./scripts/webpack-custom-rules');
const customPlugins = require('./scripts/webpack-custom-plugins');

module.exports = function override(config, env) {
  if (!config.plugins) {
    config.plugins = [];
  }
  config.module.rules.concat(customRules)
  config.plugins.concat(customPlugins)
  return config;
}
