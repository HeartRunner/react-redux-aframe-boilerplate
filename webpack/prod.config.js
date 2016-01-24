const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',

  entry: [
  ],

  output: {
    publicPath: 'dist/',
  },

  module: {
    loaders: [{
      test: /\.scss$/,
      loader: 'style!css!postcss-loader!sass',
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader?-svgo',
    },
    {
      test: /\.json$/,
      loader: 'json-loader'
    }],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"',
      },
      __DEVELOPMENT__: false,
    }),
    new ExtractTextPlugin('bundle.css'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],
};
