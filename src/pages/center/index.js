import React, { Component } from 'react'
import Card from './ui-component/card'
import Tab from '@component/tabbar'
export default class Center extends Component {
    render() {
        return (
            <div>
                <Card/>
                <Tab page='center' {...this.props}/>
            </div>
        )
    }
}
