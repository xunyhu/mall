import React, { Component } from 'react'
import styles from './index.scss'

export default class Brand extends Component {
    render() {
        const { data: { goods, brandName, imageUrl } } = this.props

        return (
            <div className={styles.brand}>
                <div className={styles.title}>
                    <div className={styles.titleBox}>
                        <div className={styles.piontBox}>{brandName}</div>
                    </div>
                </div>
                <div className={styles.floor}>
                    <div className={styles.floorList}>
                        <div className={styles.imgBox}>
                            <img src={imageUrl} alt='' />
                        </div>
                        <div className={styles.list}>
                            {
                                goods.map(item => {
                                    const { activityPrice, masterImg, name, commission, productId } = item
                                    return <div className={styles.item} key={productId}>
                                        <img src={masterImg} alt='' />
                                        <div className={styles.name}>{name}</div>
                                        <div className={styles.price}>{activityPrice}</div>
                                        <div className={styles.cms}>{commission}</div>
                                    </div>
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
