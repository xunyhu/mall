import React from 'react'
// import { GlobalStyle } from './mallstyles'
import Search from './searchBar'
import Banner from './banner'
import Iconlist from './iconlist'
import Faddish from './faddish'
import Brand from './brand'
import Recommend from '@component/recommend'
import Tab from '@component/tabbar'

const MallUi = (props) => {
    // console.log(props)
    const { layoutList = [], faddish, brands, recmmeod, history } = props
    const banner = layoutList.find(item => item.type === 'banner') || {}
    const icon = layoutList.find(item => item.type === 'box') || {}
    // console.log(banner, icon)
    return <>
        <Search />
        {banner.bannerData && <Banner data={banner.bannerData} />}
        {icon.boxData && <Iconlist data={icon.boxData} />}
        {!!faddish.length && <Faddish data={faddish} history={history} />}
        {!!brands.length && brands.map((item, index) => {
            return <Brand data={item} key={index} />
        })}
        {recmmeod.data && <Recommend data={recmmeod} history={history} />}
        <Tab page='home' {...props}/>
    </>
}

export default MallUi