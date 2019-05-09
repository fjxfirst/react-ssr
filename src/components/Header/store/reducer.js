import {CHANGE_LOGIN} from './action-types'
const defaultState ={
  login:false
}
const headerReducer=(state=defaultState,action)=>{
  switch (action.type){
    case CHANGE_LOGIN: return {login:action.login}
  }
  return state
}
export default headerReducer