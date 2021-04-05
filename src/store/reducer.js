import { combineReducers } from 'redux'
import { reducer as mallReducer } from '../main/mall'
import { reducer as selfReducer } from '../main/self'

//合并多个reducer
const reducers = combineReducers({
    mallReducer,
    selfReducer
})

export default reducers