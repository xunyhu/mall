import React, { Component } from 'react'
import { Carousel, WingBlank } from 'antd-mobile';

export default class Banner extends Component {
    state = {
        imgHeight: 137,
    }

    componentDidMount() {}

    render() {
        const { data = [] } = this.props
        // console.log(data)
        return (
            <WingBlank>
                <Carousel
                    autoplay={false}
                    infinite
                >
                    {data.map(val => (
                        <a
                            key={val.recordId}
                            href="http://www.alipay.com"
                            style={{
                                display: 'inline-block',
                                width: '100%',
                                height: this.state.imgHeight,
                                borderRadius: '8px',
                                overflow: 'hidden'
                            }}
                        >
                            <img
                                src={val.imageUrl}
                                alt=""
                                style={{ width: '100%', verticalAlign: 'top', borderRadius: '8px' }}
                            />
                        </a>
                    ))}
                </Carousel>
            </WingBlank>
        )
    }
}
