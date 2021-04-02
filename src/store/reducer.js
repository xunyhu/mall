import { combineReducers } from 'redux'
import { reducer as mallReducer } from '../main/mall'

//合并多个reducer
const reducers = combineReducers({
    mallReducer
})

export default reducers