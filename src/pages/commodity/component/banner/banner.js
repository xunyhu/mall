import React, { Component } from "react";
import { Carousel } from "antd-mobile";

export default class Banner extends Component {
  componentDidMount() {}

  render() {
    const { data = [] } = this.props;
    // console.log(data)
    return (
      <div style={{height: '100vw'}}>
        <Carousel autoplay={false} infinite>
          {data.map((val) => (
            <img
              key={val.sort}
              src={val.imagePath}
              alt=""
              style={{ width: "100%", verticalAlign: "top", height: '100vw' }}
            />
          ))}
        </Carousel>
      </div>
    );
  }
}
