import React from 'react'
import {renderToString} from "react-dom/server"
import {StaticRouter, Route} from 'react-router-dom'
import {matchRoutes} from 'react-router-config'
import {Provider} from 'react-redux'
import routes from "../Routes"
import getStore from '../store'

export const render = (req,res) => {
  const store = getStore()
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
  matchedRoutes.forEach(item=>{
    //这里是异步代码，有可能数据还没获取到，后面的代码就执行了
    if(item.route.loadData){
      promises.push(item.route.loadData(store))
    }
  })
  //当所有异步数据获取到后再去执行后面的代码
  Promise.all(promises).then(()=>{
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.path} context={{}}>
          <div>
            {routes.map(route => (
              <Route {...route} />
            ))}
          </div>
        </StaticRouter>
      </Provider>
    )
    res.send(`
    <html>
      <head>
        <title>ssr</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="/index.js"></script>
      </body>
    </html>
    `)
  }).catch(err=>{console.log(err)})
}