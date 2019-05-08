//服务器端的require语法和浏览器端的require语法，打包出的结果是不同的，所以需要配置target项
const path = require('path')
const nodeExternals = require('webpack-node-externals')
const webpackConfig = require('./webpack.base.js')
const merge=require('webpack-merge')
module.exports = merge(webpackConfig,{
  target: 'node',//webpack打包服务代码时，需要加配置项target,还需要安装webpack-node-externals
  mode: "development",
  entry: './src/server/index.js',
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'build')
  },
  externals: [nodeExternals()]//这样配置的话，例如引入require('express')，express在node_modules里，它不会被打包进文件中，会保留原有的引入形式

})