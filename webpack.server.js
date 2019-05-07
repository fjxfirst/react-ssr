//服务器端的require语法和浏览器端的require语法，打包出的结果是不同的，所以需要配置target项
const path = require('path')
const nodeExternals = require('webpack-node-externals')
module.exports = {
  target: 'node',//webpack打包服务代码时，需要加配置项target,还需要安装webpack-node-externals
  mode: "development",
  entry: './src/index.js',
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'build')
  },
  externals: [nodeExternals()],//这样配置的话，例如引入require('express')，express在node_modules里，它不会被打包进文件中，会保留原有的引入形式
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          // 通过presets设置编译规则
          // 配置'react', 正确的对react代码进行编译，这里需要安装@babel/preset-react
          presets: [
            '@babel/preset-react',
            ['@babel/env', {//'env指在打包过程中如何根据环境去做一些适配',需要安装@babel/env
              targets: {
                browsers: ['last 2 versions'] //在打包过程中会兼容主流浏览器的最新2个版本
              }
            }]
          ]
        }
      }
    ]
  }
}