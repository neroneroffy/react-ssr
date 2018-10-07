import express from 'express'
import { render } from './util'
import { getStore } from "../store";
import { matchRoutes } from "react-router-config";
import proxy from "express-http-proxy"
import routes from "../Routes";
const app = express()

app.use(express.static('public'))
app.use('/api', proxy('http://47.95.113.63', {
    proxyReqPathResolver: req => {
        return '/ssr/api' + req.url
    }
}))

app.get('*', function (req, res) {
    const store = getStore()
    const promises = []
    // store中填充什么需要根据当前路由去加载
    const matchedRoutes = matchRoutes(routes, req.path)
    matchedRoutes.forEach(v => {
        if (v.route.loadData) {
            // 调用组件内部的loadData，传入store，通过loadData调用store.dispatch派发action来载入当前路由数据
            promises.push(v.route.loadData(store))
        }
    })
    Promise.all(promises).then(() => {
        res.send(render(req, store, routes))
    })
})

app.listen(3000, function () {
    console.log('server listening on port 3000!');
})