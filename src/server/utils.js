import React from 'react'
import {renderToString} from "react-dom/server"
import {StaticRouter, Route} from 'react-router-dom'
import {renderRoutes} from "react-router-config"
import {Provider} from 'react-redux'
//服务端渲染就需要react-dom/server提供的renderToString方法
export const render = (store,routes,req) => {
  //当所有异步数据获取到后再去执行后面的代码
    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.path} context={{}}>
          <div>
            {renderRoutes(routes)}
          </div>
        </StaticRouter>
      </Provider>
    )
    return`
    <html>
      <head>
        <title>ssr</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script>
        window.context={
          state: ${JSON.stringify(store.getState())}
        }
        </script>
        <script src="/index.js"></script>
      </body>
    </html>
    `
}