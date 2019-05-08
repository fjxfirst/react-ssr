import React from 'react'
import {Route} from 'react-router-dom'
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
  {
    path:'/',
    component:Home,
    exact:true,
    //当加载Home组件之前会执行loadData方法
    loadData:Home.loadData,
    key:'home',
    routes:[
      {
        path:'/ttt',
        component:Login,
        exact:true,
        key:'ttt'
      }
    ]
  },
  {
    path:'/login',
    component:Login,
    exact:true,
    key:'login'
  }
]