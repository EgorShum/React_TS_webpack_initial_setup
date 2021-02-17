const path = require('path');

const { merge } = require('webpack-merge');
const common = require('./webpack.common.js')();

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  devServer: {
    port: 3000,
    hot: true,
    // watchContentBase: true,
    // watchOptions: {
    //   poll: true,
    //   ignored: "/node_modules/"
    // }
    // liveReload: true,
    // transportMode: 'ws',
    // historyApiFallback: true, // When we use react router always re-direct back to index.html
  },
});
