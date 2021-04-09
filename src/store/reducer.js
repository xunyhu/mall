import { combineReducers } from 'redux'
import { reducer as mallReducer } from '../pages/mall'
import { reducer as selfReducer } from '../pages/self'
import { Reducer as goodsReducer } from '../pages/commodity'

//合并多个reducer
const reducers = combineReducers({
    mallReducer,
    selfReducer,
    goodsReducer
})

export default reducers