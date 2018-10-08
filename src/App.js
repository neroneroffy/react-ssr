import React from 'react'
import Header from './components/Header'
import { renderRoutes } from 'react-router-config'

const App = props => <div className="app">
    <Header/>
    { renderRoutes(props.route.routes) }
</div>

export default App
