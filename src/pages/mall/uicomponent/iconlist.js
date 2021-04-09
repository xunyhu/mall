import React, { Component } from 'react'
import styles from './index.scss'

export default class Iconlist extends Component {
    render() {
        const { data } = this.props
        return (
            <div className={styles.tofu}>
                <div className={styles.tofuGroupWrapper}>
                {
                    data.map(item => {
                        const { title, iconUrl, recordId } = item
                        return <div className={styles.tofuWrapper} key={recordId}>
                            <img src={iconUrl} alt="" />
                            <span style={{ color: 'rgb(0, 0, 0)' }}>{title}</span>
                        </div>
                    })
                }
                </div>
            </div>
        )
    }
}
