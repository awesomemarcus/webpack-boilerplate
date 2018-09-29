var merge = require('webpack-merge');

var webpackConfig = env => {
  var commons = require('./webpack.config.commons')(env);
  var webpackEnv = require(`./webpack.config.${env.mode}`)(env);
  console.log(webpackEnv);
  return merge({ mode: env.mode }, commons, webpackEnv);
}

module.exports = webpackConfig;