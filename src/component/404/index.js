import React from 'react'
import { Button } from 'antd-mobile'

const Pages = (props) => {
    const handleClick = () => {
        props.history.replace('/home')
    }

    return <>
        <div style={{fontSize: '16px', padding: '15px', fontWeight: 'bold'}}>页面找不到~</div>
        <Button type="primary" inline size="small" style={{ marginLeft: '14px' }} onClick={handleClick}>返回首页</Button>
    </>
}

export default Pages