import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {homeReducer} from '../containers/Home/store'
import {headerReducer} from '../components/Header/store'
import {translationReducer} from '../containers/Translation/store'
import clientAxios from '../client/request'
import serverAxios from '../server/request'
const reducer= combineReducers({
  home:homeReducer,
  header:headerReducer,
  translation:translationReducer
})

export const getStore=(req)=>{
  //改变服务器端store的内容，那么就一定要使用serverAxios
  return createStore(reducer,applyMiddleware(thunk.withExtraArgument(serverAxios(req))))
}

/*
* 使用thunk.withExtraArgument直接将对应的axiosInstance带入action中
* */
export const getClientStore=()=>{
  //保证服务端的初始数据和浏览器端的初始数据一致，作为reducer的初始默认数据
  const defaultState = window.context.state //数据的脱水
  //改变服务器端store的内容，那么就一定要使用clientAxios
  return createStore(reducer,defaultState,applyMiddleware(thunk.withExtraArgument(clientAxios)))
}
