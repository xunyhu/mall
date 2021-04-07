import React from "react";
import styles from "./index.scss";

const Recommend = (props) => {
  const handleClick = () => {
    props.history.push('/commodity')
  };

  const {
    data: { data, title },
  } = props;

  return (
    <div className={styles.recommend}>
      <div className={styles.title}>
        <div className={styles.titleBox}>
          <div className={styles.piontBox}>{title}</div>
          <div className={styles.piontTxt}>RECOMMEND</div>
        </div>
      </div>
      <div className={styles.floor}>
        <div className={styles.list}>
          {data.map((item) => {
            const {
              commission,
              masterImg,
              spuId,
              sales,
              name,
              mallPrice,
            } = item;
            return (
              <div
                className={styles.itemWrap}
                key={spuId}
                onClick={handleClick}
              >
                <div className={styles.item}>
                  <div className={styles.goodsWrap}>
                    <div className={styles.imgBox}>
                      <img
                        src={`${masterImg}?x-oss-process=image/resize,w_168,limit_1`}
                        alt=" "
                      />
                    </div>
                    <div className={styles.name}>{name}</div>
                    <div className={styles.blockcenter}>
                      <div className={styles.priceText}>
                        <span>￥</span>
                        {mallPrice}
                      </div>
                      <div>
                        <div className={styles.cms}>{commission}</div>
                      </div>
                    </div>
                    <div className={styles.count}>累计销量{sales}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Recommend;
