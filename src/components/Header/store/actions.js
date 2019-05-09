import {CHANGE_LOGIN} from './action-types'
const changeLogin =(login)=>({
  type:CHANGE_LOGIN,
  login
})
export const login=()=>{
  return (dispatch,getState,axiosInstance)=>{
    //返回promise对象
    return new Promise((resolve,reject)=>{
      resolve(true)
    })
      .then(res=>{
        dispatch(changeLogin(res))
      })
  }
}
export const logout=()=>{
  return (dispatch,getState,axiosInstance)=>{
    //返回promise对象
    return new Promise((resolve,reject)=>{
      resolve(false)
    })
      .then(res=>{
        dispatch(changeLogin(res))
      })
  }
}

export const getHeaderInfo=()=>{
  /*浏览器运行这段代码
   /api/v2/movie/in_theaters?city=%E5%B9%BF%E5%B7%9E&start=0&count=10等价于请求http://localhost:3000/api/v2/movie/in_theaters?city=%E5%B9%BF%E5%B7%9E&start=0&count=10
  如果是服务器运行
   /api/v2/movie/in_theaters?city=%E5%B9%BF%E5%B7%9E&start=0&count=10等价于服务器根目录下/api/v2/movie/in_theaters?city=%E5%B9%BF%E5%B7%9E&start=0&count=10*/
  /*let url=''
  if(server){//如果是服务端渲染
    url='https://api.douban.com/v2/movie/in_theaters?city=%E5%B9%BF%E5%B7%9E&start=0&count=10'
  }else{
    url='/api/v2/movie/in_theaters?city=%E5%B9%BF%E5%B7%9E&start=0&count=10'
  }*/
  return (dispatch,getState,axiosInstance)=>{
    //返回promise对象
    const state = getState()
    return new Promise((resolve,reject)=>{
      resolve(state.header.login)
    })
      .then(res=>{
        console.log(res)
        dispatch(changeLogin(res))
      })
  }
}