module.exports={
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