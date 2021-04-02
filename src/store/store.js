import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'

/**
 * 项目中redux使用方式
 * 第一种：按功能模块去划分，各个功能模块管理自己的redux
 * 第二种：按角色去划分，统一管理redux，模块去管理中心引入
 */
const middlerware = applyMiddleware(thunk)
const store = createStore(reducer, middlerware)

export default store