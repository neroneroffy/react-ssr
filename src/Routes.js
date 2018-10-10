import React from 'react'
import Home from './containers/Home'
import App from './App'
import Translation from './containers/Translation/'

export default [
    {
        path: '/',
        component: App,
        loadData: App.loadData,
        routes: [
            {
                path: '/',
                component: Home,
                exact: true,
                loadData: Home.loadData,
            },
            {
                path: '/translation',
                component: Translation,
                loadData: Translation.loadData,
            }

        ]
    },
]
