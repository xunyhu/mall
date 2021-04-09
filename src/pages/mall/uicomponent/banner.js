import React, { Component } from "react";
import { Carousel, WingBlank } from "antd-mobile";
import styles from "./index.scss";

export default class Banner extends Component {
  componentDidMount() {}

  render() {
    const { data = [] } = this.props;
    // console.log(data)
    return (
      <WingBlank>
        <div className={styles.bannerWrap}>
          <Carousel autoplay={false} infinite>
            {data.map((val) => (
              <img
                src={val.imageUrl}
                key={val.recordId}
                alt=""
                style={{
                  width: "100%",
                  verticalAlign: "top",
                  borderRadius: "8px",
                }}
              />
            ))}
          </Carousel>
        </div>
      </WingBlank>
    );
  }
}
