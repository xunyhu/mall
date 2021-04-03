import React from 'react'
import home from '@assets/home-icon.png'
import homeActive from '@assets/active-home-icon.png'
import discovery from '@assets/discovery-icon.png'
import discoveryActive from '@assets/active-discovery-icon.png'
import centerActive from '@assets/active-center-icon.png'
import center from '@assets/center-icon.png'
import selfActive from '@assets/active-self-icon.png'
import self from '@assets/self-icon.png'
import styles from './styles.scss'

const list = [
    {
        title: '首页',
        url: home,
        activeUrl: homeActive,
        path: '/home'
    },
    {
        title: '发现',
        url: discovery,
        activeUrl: discoveryActive,
        path: '/discover'
    },
    {
        title: '会员',
        url: center,
        activeUrl: centerActive,
        path: '/center'
    },
    {
        title: '我的',
        url: self,
        activeUrl: selfActive,
        path: '/self'
    }
]

const Tabbar = (props) => {
    const handleClick = (tab) => {
       return () => {
        props.history.push(tab.path)
       }
    }

    return <React.Fragment>
        <div className={styles.BottomBox}></div>
        <div className={styles.BottomWrap}>
            {
                list.map((item, index) => {
                    const active = item.path.indexOf(props.page) >= 0
                    return <div key={index} className={`${styles.itemWrap} ${active ? styles.activeItem : ''}`} onClick={handleClick(item)}>
                        <div className={styles.imgWrap}>
                            <img alt='' src={`${active ? item.activeUrl : item.url}`} />
                        </div>
                        <div className={styles.titleWrap}>{item.title}</div>
                    </div>
                })
            }
        </div>
    </React.Fragment>
}

export default Tabbar