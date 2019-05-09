import React from 'react'
import Header from './components/Header'
import {renderRoutes} from "react-router-config"
// import routes from './Routes'
const App=(props)=>{
  return (
    <div>
      <Header/>
      {/*{renderRoutes(routes[0].routes)}*/}
      {renderRoutes(props.route.routes)}
    </div>
  )
}
export default App