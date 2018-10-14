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
    const store = getStore(req)
    const promises = []
    // store中填充什么需要根据当前路由去加载
    const matchedRoutes = matchRoutes(routes, req.path)
    matchedRoutes.forEach(v => {
        if (v.route.loadData) {
            // 包装一层promise是为了容错，无论服务端渲染获取数据时哪个请求加载失败，都会resolve，从而调用Promise.all方法，渲染页面。保证渲染有数据的组件
            const promise = new Promise((resolve, reject) => {
                // 调用组件内部的loadData，传入store，通过loadData调用store.dispatch派发action来载入当前路由数据
                v.route.loadData(store).then(resolve).catch(resolve)
            })

            promises.push(promise)
        }
    })
    Promise.all(promises).then(() => {
        const context = {
            css: []
        }
        const html = render(req, store, routes, context)
        if (context.action === 'REPLACE') {
            res.redirect(301, context.url)
        } else if (context.notFound) {
            res.status(404)
            res.send(html)
        } else {
            res.send(html)
        }
    }).catch((err) => {
        console.log(err);
        res.end('sorry, request error')
    })
})

app.listen(3000, function () {
    console.log('server listening on port 3000!');
})