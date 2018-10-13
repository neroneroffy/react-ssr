import React from 'react'
import Home from './containers/Home'
import App from './App'
import Translation from './containers/Translation/'
import NotFound from './containers/NotFound/'

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
            },
            {
                component: NotFound,
            }

        ]
    },
]
