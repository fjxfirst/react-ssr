import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import {homeReducer} from '../containers/Home/store'

const reducer= combineReducers({
  home:homeReducer
})
export const getStore=()=>createStore(reducer,applyMiddleware(thunk))
export const getClientStore=()=>{
  //保证服务端的初始数据和浏览器端的初始数据一致，作为reducer的初始默认数据
  const defaultState = window.context.state //数据的脱水
  return createStore(reducer,defaultState,applyMiddleware(thunk))
}
