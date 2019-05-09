import axios from 'axios'
import {CHANGE_HOME_LIST} from './action-types'
import clientAxios from '../../../client/request'
import serverAxios from '../../../server/request'
const changeHomeList =(list)=>({
  type:CHANGE_HOME_LIST,
  list
})
export const getHomeList=(server)=>{
  //浏览器运行这段代码
  //  /api/v2/movie/in_theaters?city=%E5%B9%BF%E5%B7%9E&start=0&count=10等价于请求http://localhost:3000/api/v2/movie/in_theaters?city=%E5%B9%BF%E5%B7%9E&start=0&count=10
  //如果是服务器运行
  // /api/v2/movie/in_theaters?city=%E5%B9%BF%E5%B7%9E&start=0&count=10等价于服务器根目录下/api/v2/movie/in_theaters?city=%E5%B9%BF%E5%B7%9E&start=0&count=10
  /*let url=''
  if(server){//如果是服务端渲染
    url='https://api.douban.com/v2/movie/in_theaters?city=%E5%B9%BF%E5%B7%9E&start=0&count=10'
  }else{
    url='/api/v2/movie/in_theaters?city=%E5%B9%BF%E5%B7%9E&start=0&count=10'
  }*/
  const request = server?serverAxios:clientAxios
  return (dispatch)=>{
    //返回promise对象
    return request.get('/v2/movie/in_theaters?city=%E5%B9%BF%E5%B7%9E&start=0&count=10')
      .then(res=>{
        const list = res.data.subjects
        dispatch(changeHomeList(list))
      })
  }
}