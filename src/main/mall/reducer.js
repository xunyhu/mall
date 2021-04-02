import { LOADLAYOUT, LOADBRANDS, LOADFADDISH, LOADRECM } from './actionTypes'

const initialState = {
    layoutList: [],
    brands: [],
    faddish: [],
    recmmeod: {}
}
const reducer = (state = initialState, { type, data }) => {
    switch (type) {
        case LOADLAYOUT:
            return { ...state, layoutList: data }
        case LOADBRANDS:
            return { ...state, brands: data }
        case LOADFADDISH:
            return { ...state, faddish: data }
        case LOADRECM:
            return { ...state, recmmeod: data }
        default:
            return state
    }
}

export default reducer;
