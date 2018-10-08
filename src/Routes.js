import React from 'react'
import Home from './containers/Home'
import App from './App'
import Login from './containers/Login'

export default [
    {
        path: '/',
        component: App,
        routes: [
            {
                path: '/',
                component: Home,
                exact: true,
                loadData: Home.loadData,
            },
            {
                path: '/login',
                component: Login,
            }

        ]
    },
]
