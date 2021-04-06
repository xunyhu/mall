import { combineReducers } from 'redux'
import { reducer as mallReducer } from '../main/mall'
import { reducer as selfReducer } from '../main/self'
import { Reducer as goodsReducer } from '../main/commodity'

//合并多个reducer
const reducers = combineReducers({
    mallReducer,
    selfReducer,
    goodsReducer
})

export default reducers