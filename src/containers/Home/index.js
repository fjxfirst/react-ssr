import React, {Component} from 'react'
import {connect} from 'react-redux'
import Header from '../../components/Header'
import {getHomeList} from "./store/actions"

class Home extends Component {
  render() {
    const {name,list}=this.props
    return (
      <div>
        <Header/>
        <div>{name}</div>
        {
          list.map(item=>{
            return <div key={item.id}>{item.title}</div>
          })
        }
      </div>
    )
  }
  //componentDidMount在服务器端是不执行的
  componentDidMount() {
    if(!this.props.list){
      this.props.getHomeList()
    }
  }
}
Home.loadData=(store)=>{
  //这个函数，负责在服务器端渲染之前，把这个路由需要的数据提前加载好
  //返回promise对象
  return store.dispatch(getHomeList())
}
export default connect(
  state => ({
    list:state.home.list,
    name: state.home.name
  }),
  dispatch => ({
    getHomeList() {
      dispatch(getHomeList())
    }
  })
)(Home)