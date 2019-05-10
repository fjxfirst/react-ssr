import React, {Component,Fragment} from 'react'
import {connect} from 'react-redux'
import {Helmet} from 'react-helmet'
import {Redirect} from 'react-router-dom'
import {getTranslationList} from './store/actions'

class Translation extends Component {
  componentDidMount(){
    this.props.getTranslationList()
  }
  render() {
    const {list, login} = this.props
    if(login){
      return <Fragment>
        <Helmet>
          <title>这是feng的ssr翻译页面，翻译的很好</title>
          <meta name="description" content="这是feng的ssr翻译页面，翻译的很好"/>
        </Helmet>
          <div>{
            list.map(item=>(
              <div key={item.id}>{item.title}</div>
            ))
          }</div>
        </Fragment>

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