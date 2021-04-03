import React, { Component } from 'react'
import Crad from './ui-component/card/index'
import IconList from './ui-component/icon/index'
import Tab from '../../component/tabbar'

export default class Self extends Component {
    render() {
        return (
            <div>
                <Crad />
                <IconList/>
                <Tab page='self' {...this.props}/>
            </div>
        )
    }
}
