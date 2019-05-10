//客户端渲染：React代码在浏览器上执行，消耗的是用户浏览器的性能
//服务器端渲染：React代码在服务器上执行，消耗的是服务器端的性能
import express from 'express'
import proxy from 'express-http-proxy'
import {render} from './utils'
import {getStore} from "../store"
import {renderToString} from "react-dom/server"
import {matchRoutes} from "react-router-config"
import routes from "../Routes"

const app = express();
app.use(express.static('public'))//设置静态资源路径，

app.use('/api', proxy('https://api.douban.com', {
  proxyReqPathResolver: function (req) {
    return '/v2/movie/in_theaters?city=%E5%B9%BF%E5%B7%9E&start=0&count=10'
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
        /**
         * 一个页面要加载A,B,C,D四个组件，这四个组件都需要服务器端加载数据
         * 假设A组件加载数据有误
         * B,C,D组件有几种情况
         * 1.B,C,D组件数据已经加载完成了
         * 2.假设B,C,D接口比较慢，B,C,D组件数据没有加载完成
         * 我们最终希望的结果是，不论慢或块，加载正确的正常显示，有误的不显示，
         * 所以之前的Promise.all会有问题，所以需要在外面再包一层Promise
         * */
        const promise =new Promise((resolve,reject)=>{
          item.route.loadData(store).then(resolve).catch(resolve)
        })
        promises.push(promise)
      }
    })
    //当所有异步数据获取到后再去执行后面的代码
    Promise.all(promises).then(() => {
      const context = {}
      const html = render(store, routes, req, context)
      if (context.action === 'REPLACE') {//判断是否为重定向
        res.redirect(301, context.url)
      } else if (context.NOT_FOUND) {//如果为true说明为404页面
        res.status(404)
        res.send(html)
      } else {
        res.send(html)
      }
    }).catch(err => {console.log(err)})
  }
);

const server = app.listen(3000);