import home from '@assets/home-icon.png'
import homeActive from '@assets/active-home-icon.png'
import discovery from '../assets/discovery-icon.png'
import discoveryActive from '../assets/active-discovery-icon.png'
import centerActive from '../assets/active-center-icon.png'
import center from '../assets/center-icon.png'
import selfActive from '../assets/active-self-icon.png'
import self from '../assets/self-icon.png'
import { Mall } from '../main/mall'
import Discover from '../main/discover'
import Center from '../main/center'
import Self from '../main/self/index'

const NavList = [
    {
        title: '商城',
        style: {
            width: '22px',
            height: '22px',
            background: `url(${home}) center center /  21px 21px no-repeat`
        },
        selectStyle: {
            width: '22px',
            height: '22px',
            background: `url(${homeActive}) center center /  21px 21px no-repeat`
        },
        children: Self
        // children: Mall
    },
    {
        title: '发现',
        style: {
            width: '22px',
            height: '22px',
            background: `url(${discovery}) center center /  21px 21px no-repeat`
        },
        selectStyle: {
            width: '22px',
            height: '22px',
            background: `url(${discoveryActive}) center center /  21px 21px no-repeat`
        },
        children: Discover
    },
    {
        title: '会员',
        style: {
            width: '22px',
            height: '22px',
            background: `url(${center}) center center /  21px 21px no-repeat`
        },
        selectStyle: {
            width: '22px',
            height: '22px',
            background: `url(${centerActive}) center center /  21px 21px no-repeat`
        },
        children: Center
    },
    {
        title: '我的',
        style: {
            width: '22px',
            height: '22px',
            background: `url(${self}) center center /  21px 21px no-repeat`
        },
        selectStyle: {
            width: '22px',
            height: '22px',
            background: `url(${selfActive}) center center /  21px 21px no-repeat`
        },
        children: Self
    }
]


export {
    NavList,
}