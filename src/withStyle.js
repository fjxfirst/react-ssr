//这个函数返回一个组件,该组件具备一些公共的特性
//这个函数是生成高阶组件的函数
import React,{Component} from 'react'
/*
* DecoratedComponent被修饰组件
* styles样式
* */
export default (DecoratedComponent,styles) => {
  //返回的叫做高阶组件
  return class NewComponent extends Component{
    componentWillMount(){
      const {staticContext}=this.props
      staticContext&&(staticContext.css.push(styles._getCss()))
    }
    render(){
      return    <DecoratedComponent {...this.props}/>
    }
  }
}