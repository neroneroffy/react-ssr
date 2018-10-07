import React from 'react'
import Home from './containers/Home'
import Login from './containers/Login'

export default [
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
