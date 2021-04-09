import { LOAD_PRODUCT } from '../actions/actionType'

const defaultState = {
    productInfo: {}
}

const Reducer = (state = defaultState, action) =>{
    switch (action.type) {
        case LOAD_PRODUCT:
            return {
                ...defaultState,
                productInfo: action.data
            }
        default:
            return state;
    }
}

export default Reducer