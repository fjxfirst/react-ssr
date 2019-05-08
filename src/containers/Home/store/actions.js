import axios from 'axios'
import {CHANGE_HOME_LIST} from './action-types'
const changeHomeList =(list)=>({
  type:CHANGE_HOME_LIST,
  list
})
export const getHomeList=()=>(
  (dispatch)=>{
    //返回promise对象
    return axios.get('http://localhost:3000//news.json')
      .then(res=>{
        const list = res.data.data
        dispatch(changeHomeList(list))
      })
  }
  )