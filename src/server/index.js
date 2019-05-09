//客户端渲染：React代码在浏览器上执行，消耗的是用户浏览器的性能
//服务器端渲染：React代码在服务器上执行，消耗的是服务器端的性能
import express from 'express'
import proxy from 'express-http-proxy'
import {render} from './utils'
import {getStore}from "../store"
import {renderToString} from "react-dom/server"
import {matchRoutes} from "react-router-config"
import routes from "../Routes"

const app = express();
app.use(express.static('public'))//设置静态资源路径，

app.use('/api',proxy('https://api.douban.com', {
  proxyReqPathResolver: function (req) {
    console.log(req.url)
    return '/v2/movie/in_theaters?city=%E5%B9%BF%E5%B7%9E&start=0&count=10'
    /*var parts = req.url.split('?');
    var queryString = parts[1];
    var updatedPath = parts[0].replace(/test/, 'tent');
    return updatedPath + (queryString ? '?' + queryString : '');*/
  }
}))


app.get('*', function (req, res) {
    const store = getStore(req)
    //如果在这里，能够拿到异步数据，并填充到store中
    //store里面到底填充什么，需要结合当前用户请求的地址和路由，做判断
    //如果用户访问/路径，就拿Home组件的异步数据
    //如果用户访问/login路径，就拿Login组件的异步数据
    /*routes.some(route => { //遍历routes中的每一条路由
      //如果当前请求的路径和route中的路由能匹配上，match就为true
      const match = matchPath(req.path, route);
      if (match){
        matchedRoutes.push(route)
      }
    });*/
    const matchedRoutes = matchRoutes(routes, req.path)
    const promises = []
    matchedRoutes.forEach(item => {
      //这里是异步代码，有可能数据还没获取到，后面的代码就执行了
      if (item.route.loadData) {
        promises.push(item.route.loadData(store))
      }
    })
    //当所有异步数据获取到后再去执行后面的代码
    Promise.all(promises).then(() => {
      res.send(render(store, routes, req))
    }).catch(err => {console.log(err)})
  }
);

const server = app.listen(3000);