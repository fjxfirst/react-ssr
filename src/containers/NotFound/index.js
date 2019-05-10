import React, {Component} from 'react'

class NotFound extends Component {
  componentWillMount(){
    const {staticContext}=this.props
    staticContext&&(staticContext.NOT_FOUND=true)
  }
  render() {
    return (
      <div>404,找不到内容</div>
    )
  }
}

export default NotFound