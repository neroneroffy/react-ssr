import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { homeReducer } from '../containers/Home/store'
const reducer = combineReducers({
    home: homeReducer
})

export const getStore = () => {
    // 避免出现单例的store
    return createStore(reducer, applyMiddleware(thunk))
}
export const getClientStore = () => {
    // 取到服务端渲染的store，作为初始值，保证服务端渲染和客户端渲染的store一致
    const defaultStore = window.context.state
    return createStore(reducer, defaultStore, applyMiddleware(thunk))
}
