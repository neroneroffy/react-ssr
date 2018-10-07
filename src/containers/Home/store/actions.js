import axios from 'axios'
import * as actionsType from './constants'
const changeList = list => ({
    type: actionsType.CHANGE_LIST,
    list
})

export const fetchHomeList = (server) => {
    let url = ''
    if (server) {
        url = 'http://47.95.113.63/ssr/api/news.json?secret=D37msjPeC3'
    } else {
        url = '/api/news.json?secret=D37msjPeC3'
    }
    return dispatch => {
        return axios.get(url)
            .then(res => {
                dispatch(changeList(res.data.data))
            })
    }
}