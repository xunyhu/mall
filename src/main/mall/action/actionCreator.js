import { LOADLAYOUT, LOADBRANDS, LOADFADDISH, LOADRECM } from './actionTypes'
import Http from '../../../utils/http'

const loadLayout = list => {
    return {
        type: LOADLAYOUT,
        data: list
    }
}

const loadBrands = list => {
    return {
        type: LOADBRANDS,
        data: list
    }
}

const loadFaddish = list => {
    return {
        type: LOADFADDISH,
        data: list
    }
}

const loadRecm = list => {
    return {
        type: LOADRECM,
        data: list
    }
}

const loadLayoutAsync = () => {
    return async (dispatch) => {
        // await Http.get('/api/layout', {}).then(res => {
        //     console.log(res)
        // })
        let result = await Http.get('/api/layout', {});
        dispatch(loadLayout(result.modules))
    }
}

const loadBrandsAsync = () => {
    return async (dispatch) => {
        let result = await Http.get('/api/brands', {});
        dispatch(loadBrands(result.result.brands))
    }
}

const loadFaddishAsync = () => {
    return async (dispatch) => {
        let result = await Http.get('/api/faddish', {});
        dispatch(loadFaddish(result.result))
    }
}

const loadRecmAsync = () => {
    return async (dispatch) => {
        let result = await Http.get('/api/recmmeod', {});
        dispatch(loadRecm(result.result))
    }
}

export {
    loadLayout,
    loadBrands,
    loadFaddish,
    loadRecm,
    loadLayoutAsync,
    loadBrandsAsync,
    loadFaddishAsync,
    loadRecmAsync
}