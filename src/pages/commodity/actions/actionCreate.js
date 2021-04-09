import { LOAD_PRODUCT } from './actionType'
import Http from '../../../utils/http'

const setProductState = (data) => {
    return {
        type: LOAD_PRODUCT,
        data: data
    }
}

const LoadProductAsync = () => {
    return async (dispatch) => {
        let res = await Http.get('/api/product', {});
        dispatch(setProductState(res.result))
    }
}

export {
    LoadProductAsync,
}