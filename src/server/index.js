//客户端渲染：React代码在浏览器上执行，消耗的是用户浏览器的性能
//服务器端渲染：React代码在服务器上执行，消耗的是服务器端的性能
import express from 'express'
import {render} from './utils'

const app = express();
app.use(express.static('public'))//设置静态资源路径，
//服务端渲染就需要react-dom/server提供的renderToString方法

app.get('*', function (req, res) {
    render(req,res);
  }
);

const server = app.listen(3000);