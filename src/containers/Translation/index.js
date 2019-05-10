import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {getTranslationList} from './store/actions'

class Translation extends Component {
  componentDidMount(){
    this.props.getTranslationList()
  }
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
Translation.loadData=(store)=>{
  return store.dispatch(getTranslationList())
}
const ExportTranslation = connect(
  state => ({
    list: state.translation.list,
    login: state.header.login
  }),
  dispatch=>({
    getTranslationList(){
      dispatch(getTranslationList())
    }
  })
)(Translation)

export default ExportTranslation