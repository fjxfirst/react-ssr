import React, {Fragment, Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {actions} from './store'

class Header extends Component {
  render() {
    const {login,handleLogin,handleLogout} = this.props
    return (
      <div>
        <Link to='/'>首页</Link>
        <br/>
        {
          login ?
            <Fragment>
              <div onClick={handleLogout}>退出</div>
              <Link to='/translation'>翻译列表</Link>
            </Fragment> : <div onClick={handleLogin}>登录</div>
        }
      </div>
    )
  }

}

export default connect(
  state => ({
    login: state.header.login
  }),
  dispatch=>({
    handleLogin(){
      dispatch(actions.login())
    },
    handleLogout(){
      dispatch(actions.logout())
    }
  })
)(Header)