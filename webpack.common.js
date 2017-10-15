/**
 *  Created by daiwenjuan on 17/10/10 下午4:43.
 */
const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const app = ['./index.js']
const nodeEnv = process.env.NODE_ENV || 'development'

module.exports = {
  context : path.resolve(__dirname, 'src'),
  entry : {
    app : app,
    vendor : ['react', 'react-dom']
  },
  output : {
    filename : '[name].js',
    path : path.join(__dirname, 'build'),

    chunkFilename : '[name].js'
  }
  ,
  plugins : [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title : 'Production'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name : 'vendor'
    }),
    new webpack.DefinePlugin({
      // 定义全局变量
      'process.env' : {
        'NODE_ENV' : JSON.stringify(nodeEnv)
      }
    })
  ],
  resolve : {
    extensions : ['.js', '.jsx', '.less', '.scss', '.css'],
    modules : [
      path.resolve(__dirname, 'node_modules'),
      path.join(__dirname, './src')
    ],
  },
  module : {
    rules : [
      {
        test : /\.js$/,
        exclude : /(node_modules|bower_components)/,
        use : 'babel-loader'
      }, {
        test : /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
        use : ['file-loader?limit=1000&name=files/[md5:hash:base64:10].[ext]']
      }
    ]
  }
}