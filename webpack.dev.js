/**
 *  Created by daiwenjuan on 17/10/10 下午4:43.
 */
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.common')
const webpackServerConfig = require('./webpackServerConfig')
common.entry.app.unshift('react-hot-loader/patch', `webpack-dev-server/client?http://${webpackServerConfig.host}:${webpackServerConfig.port}`, 'webpack/hot/only-dev-server')
common.output.publicPath = '/build/'
module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      {
        test: /\.(less|css)$/,
        use: ['style-loader', 'css-loader?modules', 'less-loader']
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
})