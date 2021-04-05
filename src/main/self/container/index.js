import React, { Component } from 'react'
import { connect } from 'react-redux'
import Crad from '../ui-component/card/index'
import IconList from '../ui-component/icon/index'
import Tab from '@component/tabbar'
import Recommend from '@component/recommend'
import { LoadData } from '../actions/actionCreate'

const mapStateToProps = (state) => {
    return {
        recomend: state.mallReducer.recmmeod.title ? state.mallReducer.recmmeod : state.selfReducer.recomendInfo
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        queryData() {
            dispatch(LoadData())
        }
    }
}

@connect(mapStateToProps, mapDispatchToProps)
class Self extends Component {
    componentDidMount() {
        const { recomend } = this.props
        !recomend.data && this.props.queryData()
    }

    render() {
        const { recomend } = this.props
        return (
            <div>
                <Crad />
                <IconList/>
                {recomend.data && <Recommend data={recomend} />}
                <Tab page='self' {...this.props}/>
            </div>
        )
    }

    componentDidUpdate() {
        // console.log(this.props)
    }
}

export default Self
