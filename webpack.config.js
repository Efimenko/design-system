const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');


const extractDefaultStyles = new ExtractTextPlugin('default.css');
const extractWireframesStyles = new ExtractTextPlugin('wireframes.css');
const extractDesignStyles = new ExtractTextPlugin('design.css');

module.exports = {
  mode: 'development',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use: [
          'babel-loader',
        ]
      },
      {
        test: /\.css$/,
        exclude: [path.resolve(__dirname, 'src/wireframes'), path.resolve(__dirname, 'src/designs')],
        use: extractDefaultStyles.extract([ 'css-loader', 'postcss-loader' ])
      },
      {
        test: /wireframes\/.+\.css$/,
        use: extractWireframesStyles.extract([ 'css-loader', 'postcss-loader' ])
      },
      {
        test: /designs\/.+\/.+\.css$/,
        use: extractDesignStyles.extract([ 'css-loader', 'postcss-loader' ])
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/'
            }
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname),
    watchContentBase: true,
    compress: false,
    port: 9001,
  },
  plugins: [
    extractDefaultStyles,
    extractWireframesStyles,
    extractDesignStyles,
    new CleanWebpackPlugin(['dist']),
    new webpack.HotModuleReplacementPlugin()
  ]
};