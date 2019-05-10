import {CHANGE_TRANSLATION_LIST} from './action-types'
const defaultState ={
  list:[]
}
const translationReducer=(state=defaultState,action)=>{
  switch (action.type){
    case CHANGE_TRANSLATION_LIST: return {list:action.list}
  }
  return state
}
export default translationReducer