var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var path = require('path');

module.exports = env => {

  return {
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      watchContentBase: true,
      compress: true,
      disableHostCheck: true,
      historyApiFallback: true,
      hot: true,
      host: '0.0.0.0',
      https: true,
      port: 3000,
    },
    plugins: [
      new OpenBrowserPlugin({ url: 'https://localhost:3000'}),
    ]
  }
}