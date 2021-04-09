import { LoadRecomend } from '../actions/actionType'

const defaultState = {
    recomendInfo: {}
}

const reduce = (state = defaultState, action) => {
    switch (action.type) {
        case LoadRecomend:
            return {
                recomendInfo: action.data
            }
        default:
            return state
    }
}

export default reduce