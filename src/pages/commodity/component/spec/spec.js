import React from "react";
import styles from "./index.scss";

const Spec = ({ data }) => {
  return (
    <div className={styles.specWrap}>
      <SpecItem leftText="已选" centerText="哈哈哈哈" showArrow />
      <SpecItem
        leftText="配送"
        centerText="哈哈哈哈"
        rightText="包邮"
        showArrow
      />
      <div className={styles.titleWrap}>
        <div className={styles.title}>商品详情</div>
        <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
      </div>
    </div>
  );
};

const SpecItem = (props) => {
  const { leftText, centerText, rightText, showArrow } = props;
  return (
    <div className={styles.specItem}>
      <div className={styles.left}>{leftText}</div>
      <div className={styles.center}>{centerText}</div>
      <div className={styles.right}>{rightText}</div>
      {!!showArrow && <div className={styles.arrow}></div>}
    </div>
  );
};

export default Spec;
