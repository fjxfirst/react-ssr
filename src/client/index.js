import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter,Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import {renderRoutes} from "react-router-config"
import {getClientStore}from '../store'
import routes from '../Routes'

const App=()=>{
  return (
    <Provider store={getClientStore()}>
      <BrowserRouter>
        <div>
          {/*{routes.map(route => (
            <Route {...route} />
          ))}*/}
          {renderRoutes(routes)}
        </div>
      </BrowserRouter>
    </Provider>
  )
}
ReactDom.hydrate(<App/>, document.getElementById('root'))