import {CHANGE_TRANSLATION_LIST} from './action-types'
const defaultState ={
  list:[
    {
      "id":12,
      "title":"孙悟空"
    },
    {
      "id":1,
      "title":"猪八戒"
    },
    {
      "id":2,
      "title":"唐三藏"
    },
    {
      "id":3,
      "title":"白骨精"
    },
    {
      "id":4,
      "title":"太上老君"
    }
  ]
}
const translationReducer=(state=defaultState,action)=>{
  switch (action.type){
    case CHANGE_TRANSLATION_LIST: return {list:action.list}
  }
  return state
}
export default translationReducer