import React from 'react'
import Header from '../../components/Header'
const Login=()=>{
  return (
    <div>
      <Header/>
      <div onClick={()=>{alert('login')}}>login</div>
    </div>
  )
}
export default Login