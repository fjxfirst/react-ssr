import React, {Fragment, Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {actions} from './store'
import styles from './style.css'
import withStyles from '../../withStyle'
class Header extends Component {
  /*componentWillMount(){
    const {staticContext}=this.props
    staticContext&&(staticContext.css.push(styles._getCss()))
  }*/
  render() {
    const {login,handleLogin,handleLogout} = this.props
    return (
      <div className={styles.container}>
        <Link to='/' className={styles.item}>首页</Link>
        {
          login ?
            <Fragment>
              <Link to='/translation' className={styles.item}>翻译列表</Link>
              <div onClick={handleLogout} className={styles.item}>退出</div>
            </Fragment> : <div onClick={handleLogin} className={styles.item}>登录</div>
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
)(withStyles(Header,styles))