import axios from 'axios'
import secret from '../config'

const createInstance = req => axios.create({
    baseURL: "http://47.95.113.63/ssr/",
    headers: {
        cookie: req.get('cookie') || ''
    },
    params: {...secret}
})

export default createInstance