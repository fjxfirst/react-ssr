//服务器端的require语法和浏览器端的require语法，打包出的结果是不同的，所以需要配置target项
const path = require('path')

module.exports = {
  mode: "development",
  entry: './src/client/index.js',
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'public')
  },
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