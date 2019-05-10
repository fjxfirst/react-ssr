//服务器端的require语法和浏览器端的require语法，打包出的结果是不同的，所以需要配置target项
const path = require('path')
const webpackConfig = require('./webpack.base.js')
const merge=require('webpack-merge')
module.exports = merge(webpackConfig,{
  mode: "development",
  entry: './src/client/index.js',
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test:/\.css$/,
        use: ['style-loader',{
          loader: "css-loader",
          options: {
            importLoaders:1,
            modules:true,
            localIdentName:'[name]_[local]_[hash:base64:5]'
          }
        }]
      }
    ]
  }
})