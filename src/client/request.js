import axios from 'axios'
import secret from '../config'

const instance = axios.create({
    baseURL: "/",
    params: {...secret}
})

export default instance