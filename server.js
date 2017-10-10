/**
 *  Created by daiwenjuan on 17/10/10 下午5:32.
 */
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.dev')
const errorOverlayMiddleware = require('react-error-overlay/middleware')
const webpackServerConfig = require('./webpackServerConfig')
const proxy = require('http-proxy-middleware')

new WebpackDevServer(webpack(config), {
  hot: true,
  compress: true,
  historyApiFallback: true,
  inline: true,
  publicPath: '/build/',
  watchOptions: {
    ignore: /node_modules/
  },
  stats: {
    modules: false,
    chunks: false,
    colors: true
  },
  setup(app){
    app.use(errorOverlayMiddleware())
    app.use('/book/*', proxy({
      target: 'https://www.easy-mock.com/mock/593611b991470c0ac101d474',
      secure: false
    }))
  }
}).listen(webpackServerConfig.port, webpackServerConfig.host, function (err, result) {
  if (err) {
    return console.log(err)
  }

  console.log(`Listening at http://${webpackServerConfig.host}:${webpackServerConfig.port}/`)
})