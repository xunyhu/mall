import React from 'react'
import styles from './index.scss'

const Title = (props: any) => {
    const { name, marketPrice, price, sales } = props.data;
    return <div className={styles.titleWrap}>
        <div className={styles.price}>￥{price}<span className={styles.oriPrice}>￥{marketPrice}</span></div>
        <div className={styles.title}>{name}</div>
        <div className={styles.sales}>累计热销{sales}件</div>
    </div>
}

export default Title;