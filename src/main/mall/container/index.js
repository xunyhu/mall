import React, { Component } from 'react'
import { connect } from 'react-redux'
import MallUI from '../uicomponent'
import { loadLayoutAsync, loadBrandsAsync, loadFaddishAsync, loadRecmAsync } from '../action/actionCreator'

// @connect()
class Container extends Component {
    componentDidMount() {
        this.props.loadData()
    }

    render() {
        return <MallUI {...this.props}></MallUI>
    }
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        layoutList: state.mallReducer.layoutList,
        brands: state.mallReducer.brands,
        faddish: state.mallReducer.faddish,
        recmmeod: state.mallReducer.recmmeod,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadData() {
            dispatch(loadLayoutAsync())
            dispatch(loadBrandsAsync())
            dispatch(loadFaddishAsync())
            dispatch(loadRecmAsync())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
