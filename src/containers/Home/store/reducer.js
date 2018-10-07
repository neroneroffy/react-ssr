import * as actionsType from './constants'
const defaultState = {
    name: 'dell',
    newsList: []
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionsType.CHANGE_LIST:
            return {
                ...state,
                newsList: action.list
            }
        default:
            return state
    }
}