import { LoadRecomend } from './actionType'
import Http from '../../../utils/http'

const setDate = data => {
    return {
        type: LoadRecomend,
        data: data
    }
}

const LoadData = () => {
    return async (dispatch) => {
        let result = await Http.get('/api/recmmeod', {});
        dispatch(setDate(result.result))
    }
}

export {
    LoadData
}