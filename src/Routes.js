import React from 'react'
import {Route} from 'react-router-dom'
import App from './App'
import Home from './containers/Home'
import Login from './containers/Login'

/*export default (
  <div>
    <Route path='/' exact component={Home}></Route>
    <Route path='/login' exact component={Login}></Route>
  </div>
)*/
//
export default [
  //当用户访问'/'路径时，能匹配出App和Home组件
  //当用户访问'/login'路径时，能匹配出App和Login组件

  {
    path:'/',
    component:App,
    loadData:App.loadData,
    routes:[
      {
        path:'/',
        component:Home,
        exact:true,
        //当加载Home组件之前会执行loadData方法
        loadData:Home.loadData,
        key:'home'
      },
      {
        path:'/login',
        component:Login,
        exact:true,
        key:'login'
      }
    ]
  }
]



