import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'

class Translation extends Component {
  render() {
    const {list, login} = this.props
    if(login){
      return <div>{
        list.map(item=>(
          <div key={item.id}>{item.title}</div>
        ))
      }</div>
    } else{
      return <Redirect to='/'/>
    }
  }
}

export default connect(
  state => ({
    list: state.translation.list,
    login: state.header.login
  }),
  null
)(Translation)