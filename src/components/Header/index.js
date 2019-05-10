import React, {Fragment, Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {actions} from './store'
import styles from './style.css'
class Header extends Component {
  componentWillMount(){
    const {staticContext}=this.props
    staticContext&&(staticContext.css.push(styles._getCss()))
  }
  render() {
    const {login,handleLogin,handleLogout} = this.props
    return (
      <div className={styles.test}>
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