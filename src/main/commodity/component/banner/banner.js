import React, { Component } from "react";
import { Carousel } from "antd-mobile";

export default class Banner extends Component {
  state = {
    imgHeight: "100vw",
  };

  componentDidMount() {}

  render() {
    const { data = [] } = this.props;
    // console.log(data)
    return (
      <Carousel autoplay={false} infinite>
        {data.map((val) => (
          <a
            key={val.sort}
            href="http://www.alipay.com"
            style={{
              display: "inline-block",
              width: "100%",
              height: this.state.imgHeight,
              overflow: "hidden",
            }}
          >
            <img
              src={val.imagePath}
              alt=""
              style={{ width: "100%", verticalAlign: "top" }}
            />
          </a>
        ))}
      </Carousel>
    );
  }
}
