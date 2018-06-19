const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');


const extractDefaultStyles = new ExtractTextPlugin('default.css');
const extractWireframesStyles = new ExtractTextPlugin('wireframes.css');
const extractDesign1Styles = new ExtractTextPlugin('design1.css');
const extractDesign2Styles = new ExtractTextPlugin('design2.css');
const extractDesign3Styles = new ExtractTextPlugin('design3.css');
const extractDesign4Styles = new ExtractTextPlugin('design4.css');

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
        use: extractDefaultStyles.extract([ 'css-loader', 'sass-loader' ])
      },
      {
        test: /wireframes\/.+\.css$/,
        use: extractWireframesStyles.extract([ 'css-loader', 'sass-loader'])
      },
      {
        test: /designs\/design1\/.+\.css$/,
        use: extractDesign1Styles.extract([ 'css-loader', 'sass-loader'])
      },
      {
        test: /designs\/design2\/.+\.css$/,
        use: extractDesign2Styles.extract([ 'css-loader', 'sass-loader'])
      },
      {
        test: /designs\/design3\/.+\.css$/,
        use: extractDesign3Styles.extract([ 'css-loader', 'sass-loader'])
      },
      {
        test: /designs\/design4\/.+\.css$/,
        use: extractDesign4Styles.extract([ 'css-loader', 'sass-loader'])
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
    extractDesign1Styles,
    extractDesign2Styles,
    extractDesign3Styles,
    extractDesign4Styles,
    new CleanWebpackPlugin(['dist']),
    new webpack.HotModuleReplacementPlugin()
  ]
};