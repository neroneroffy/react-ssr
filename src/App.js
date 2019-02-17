import React from 'react'
import Header from './components/Header'
import { renderRoutes } from 'react-router-config'
import { actions } from './components/Header/store/'

const App = props => <div className="app">
    <Header staticContext={props.staticContext}/>
    { renderRoutes(props.route.routes) }
</div>
App.loadData = store => {
console.log(123)
    return store.dispatch(actions.getHeaderInfo())
}
export default App
