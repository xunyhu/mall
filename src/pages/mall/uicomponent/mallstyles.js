import styled, { createGlobalStyle } from 'styled-components'
import menuBlack from '../../assets/icon/menu-black.png'
import searchIcon from '../../assets/icon/search_icon@2x.png'
import messageIcon from '../../assets/icon/message-black.png'

const GlobalStyle = createGlobalStyle`
    body {
        background-color: #f8f8f8;
        font-size: .14rem;
	}
    .am-tab-bar-bar {
        height: .5rem;
    }
    .am-tab-bar-bar .am-tab-bar-tab-title {
        font-size: .14rem;
        margin-top: 0.02rem;
    }
`

const Search = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    padding: .12rem .15rem;
    -webkit-transition: background-image .3s;
    transition: background-image .3s;
    background-size: 100%;
    background-repeat: no-repeat;
    div:nth-child(1) {
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        margin-right: .16rem;
        span {
            background-image: url(${menuBlack});
            display: inline-block;
            position: relative;
            width: .24rem;
            height: .24rem;
            background-repeat: no-repeat;
            background-size: 100% 100%;
        }
    }
    div:nth-child(2) {
        padding-left: .08rem;
        text-indent: .20rem;
        width: 2.57rem;
        height: .32rem;
        background: #f5f5f5;
        border-radius: .50rem;
        display: -webkit-box;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: start;
        justify-content: flex-start;
        color: #bbb;
        background-image: url(${searchIcon});
        background-repeat: no-repeat;
        background-size: .16rem .16rem;
        background-position: .08rem center;
    }
    div:nth-child(3) {
        display: -webkit-box;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
        -webkit-box-align: center;
        align-items: center;
        -webkit-box-pack: center;
        justify-content: center;
        margin-left: .16rem;
        position: relative;
        width: .24rem;
        height: .24rem;
        background-image: url(${messageIcon});
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
`;


export {
    GlobalStyle,
    Search
}