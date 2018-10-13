import * as actionsType from './constants'
const changeList = list => ({
    type: actionsType.CHANGE_LIST,
    list
})

export const getTranslationList = () => {

    return (dispatch, getState, axiosInstance) => {
        // 利用redux-thunk的withExtraArgument api，使异步action接收第三个参数，为withExtraArgument中传递的实例【axiosInstance】
        return axiosInstance.get('/api/translations.json')
            .then(res => {
                if (res.data.success) {
                    dispatch(changeList(res.data.data))
                }else {
                    dispatch(changeList([]))
                }

            })
    }
}
