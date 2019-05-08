//客户端渲染：React代码在浏览器上执行，消耗的是用户浏览器的性能
//服务器端渲染：React代码在服务器上执行，消耗的是服务器端的性能
import express from 'express'
import React from 'react'
import {renderToString} from 'react-dom/server'
import Home from '../containers/Home'

const app = express();
app.use(express.static('public'))//设置静态资源路径，
//服务端渲染就需要react-dom/server提供的renderToString方法
const content = renderToString(<Home/>)
app.get('/', function (req, res) {
    res.send(
      `<html>
      <head>
        <title>ssr</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="/index.js"></script>
      </body>
    </html>
    `
    );
  }
);

const server = app.listen(3000);