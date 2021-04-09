import React, { Component } from 'react'
import { connect } from 'react-redux'
import MallUI from '../uicomponent'
import { loadLayoutAsync, loadBrandsAsync, loadFaddishAsync, loadRecmAsync } from '../action/actionCreator'

// @connect()
class Container extends Component {
    componentDidMount() {
        !this.props.layoutList.length && this.props.loadLayout()
        !this.props.brands.length && this.props.loadBrand()
        !this.props.faddish.length && this.props.loadFaddish()
        !this.props.recmmeod.title && this.props.loadRecm()
    }

    render() {
        return <MallUI {...this.props}></MallUI>
    }
}

const mapStateToProps = (state) => {
    return {
        layoutList: state.mallReducer.layoutList,
        brands: state.mallReducer.brands,
        faddish: state.mallReducer.faddish,
        recmmeod: state.mallReducer.recmmeod.title ? state.mallReducer.recmmeod : state.selfReducer.recomendInfo,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadLayout() {
            dispatch(loadLayoutAsync())
        },
        loadBrand() {
            dispatch(loadBrandsAsync())
        },
        loadFaddish() {
            dispatch(loadFaddishAsync())
        },
        loadRecm() {
            dispatch(loadRecmAsync())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
