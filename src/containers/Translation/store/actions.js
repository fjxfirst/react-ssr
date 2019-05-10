import axios from 'axios'
import {CHANGE_TRANSLATION_LIST} from './action-types'
import clientAxios from '../../../client/request'
import serverAxios from '../../../server/request'
const changeTranslationList =(list)=>({
  type:CHANGE_TRANSLATION_LIST,
  list
})
export const getTranslationList=()=>{
  return (dispatch,getState,axiosInstance)=>{
    //返回promise对象
    return new Promise((resolve,reject)=>{
      const list=[
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
      resolve(list)
    })
      .then(res=>{
        const list = res
        dispatch(changeTranslationList(list))
      })
  }
}