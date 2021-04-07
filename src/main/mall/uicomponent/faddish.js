import React, { Component } from "react";
import styles from "./index.scss";

export default class Faddish extends Component {
  handleClick = () => {
    this.props.history.push("/commodity");
  };

  render() {
    const { data } = this.props;
    return (
      <div className={styles.faddish}>
        <div className={styles.marketHotTitle}></div>
        <div className={styles.productList}>
          {data.map((item) => {
            const { actProductId, background, salePrice, commission } = item;
            return (
              <div
                className={styles.productItem}
                key={actProductId}
                onClick={this.handleClick}
              >
                <div className={styles.imageBox}>
                  <img
                    src={`${background}?x-oss-process=image/resize,w_900,limit_1`}
                    alt=""
                  />
                </div>
                <div className={styles.productName}>{}</div>
                <div className={styles.productPrice}>
                  <div className={styles.productPriceInner}>
                    <div className={styles.priceText}>
                      <span>￥</span>
                      {salePrice}
                    </div>
                    <div className={styles.commissionTa}>赚￥{commission}</div>
                  </div>
                  <div className={styles.btnBar}>
                    <div className={styles.shareBtn}>去分享</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
