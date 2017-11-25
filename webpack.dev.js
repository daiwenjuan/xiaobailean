/**
 *  Created by daiwenjuan on 17/10/10 下午4:43.
 */
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common')
const webpackServerConfig = require('./webpackServerConfig')
common.entry.app.unshift('babel-polyfill', 'react-hot-loader/patch', `webpack-dev-server/client?http://${webpackServerConfig.host}:${webpackServerConfig.port}`, 'webpack/hot/only-dev-server')
common.output.publicPath = '/build/'
module.exports = merge(common, {
  devtool : 'source-map',
  devServer : {
    contentBase : path.join(__dirname, 'build'),
    historyApiFallback : true,
    inline : true,//注意：不写hot: true，否则浏览器无法自动更新；也不要写colors:true，progress:true等，webpack2.x已不支持这些
  },
  module : {
    rules : [
      {
        test : /\.(less|css)$/,
        use : ['style-loader', 'css-loader?modules', 'less-loader']
      },
    ]
  },
  plugins : [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
})