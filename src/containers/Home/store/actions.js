import * as actionsType from './constants'
const changeList = list => ({
    type: actionsType.CHANGE_LIST,
    list
})

export const fetchHomeList = () => {
    return (dispatch, getState, axiosInstance) => {
        // 利用redux-thunk的withExtraArgument api，使异步action接收第三个参数，为withExtraArgument中传递的实例【axiosInstance】
        return axiosInstance.get('/api/news.json')
            .then(res => {
                dispatch(changeList(res.data.data))
            })
    }
}
