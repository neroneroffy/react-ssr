import * as actionsType from './constants'
const defaultState = {
    translationList: []
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionsType.CHANGE_LIST:
            return {
                ...state,
                translationList: action.list
            }
        default:
            return state
    }
}