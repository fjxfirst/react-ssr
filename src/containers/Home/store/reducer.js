import {CHANGE_HOME_LIST} from './action-types'
const defaultState ={
  name:'feng',
  list:[]
}
const homeReducer=(state=defaultState,action)=>{
  switch (action.type){
    case CHANGE_HOME_LIST: return {...state,list:action.list}
  }
  return state
}
export default homeReducer