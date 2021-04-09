import React from "react";
import styles from "./index.scss";

interface Icon {
  url: string;
  name: string;
}

const ordersIcon: Array<Icon> = [
  {
    url:
      "https://imgs.weilaijishi.cn/h5mall/user/order_1.png?x-oss-process=image/resize,w_300,limit_1",
    name: "待付款",
  },
  {
    url:
      "https://imgs.weilaijishi.cn/h5mall/user/order_2.png?x-oss-process=image/resize,w_300,limit_1",
    name: "待发货",
  },
  {
    url:
      "https://imgs.weilaijishi.cn/h5mall/user/order_3.png?x-oss-process=image/resize,w_300,limit_1",
    name: "待收货",
  },
  {
    url:
      "https://imgs.weilaijishi.cn/h5mall/user/order_4.png?x-oss-process=image/resize,w_300,limit_1",
    name: "待评价",
  },
  {
    url:
      "https://imgs.weilaijishi.cn/h5mall/user/order_5.png?x-oss-process=image/resize,w_300,limit_1",
    name: "退款/售后",
  },
];

const Card: React.FC = () => {
  return (
    <div className={styles.card_wrap}>
      <div className={styles.user_wrap}>
        <div className={styles.user_info}>
          <div className={styles.user_img}>
            <img
              alt=""
              src="https://imgs.weilaijishi.cn/h5mall/icon/default-face.png"
            />
          </div>
          <div className={styles.user_name}>
            <div className={styles.nameBox}>R</div>
            <div className={styles.getCode}>会员码：123456</div>
          </div>
        </div>
        <div className={styles.shop_info}>
          <div className={styles.info_item}>
            <span>1</span>
            <p>收藏商品</p>
          </div>
          <div className={styles.info_item}>
            <span>1</span>
            <p>收藏店铺</p>
          </div>
          <div className={styles.info_item}>
            <span>1</span>
            <p>关注</p>
          </div>
        </div>
        <div className={styles.user_order}>
          <div className={styles.order_tap}>
            <div>我的订单</div>
            <div>查看全部订单<span></span></div>
          </div>
          <div className={styles.order_box}>
            <div className={styles.order_body}>
              {ordersIcon.map((item, index) => {
                return (
                  <div className={styles.orderStatusItem} key={index}>
                    <img
                      alt=""
                      src={item.url}
                    />
                    <div>{item.name}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
