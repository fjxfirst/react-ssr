import axios from 'axios'
import {CHANGE_HOME_LIST} from './action-types'
const changeHomeList =(list)=>({
  type:CHANGE_HOME_LIST,
  list
})
export const getHomeList=()=>(
  (dispatch)=>{
    //返回promise对象
    return axios.get('/api/v2/movie/in_theaters?city=%E5%B9%BF%E5%B7%9E&start=0&count=10')
      .then(res=>{
        const list = res.data.subjects
        dispatch(changeHomeList(list))
      })
  }
  )