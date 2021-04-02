import React from "react";
import styles from "./index.scss";

interface Icon {
  url: string;
  name: string;
}

const IconList: Array<Icon> = [
  {
    url:
      "https://imgs.weilaijishi.cn/h5mall/user/group_0.png?x-oss-process=image/resize,w_300,limit_1",
    name: "权益卡包",
  },
  {
    url:
      "https://imgs.weilaijishi.cn/h5mall/user/group_1.png?x-oss-process=image/resize,w_300,limit_1",
    name: "优惠券",
  },
  {
    url:
      "https://imgs.weilaijishi.cn/h5mall/user/group_2.png?x-oss-process=image/resize,w_300,limit_1",
    name: "集市币",
  },
  {
    url:
      "https://imgs.weilaijishi.cn/h5mall/user/group_3.png?x-oss-process=image/resize,w_300,limit_1",
    name: "商旅订单",
  },
  {
    url:
      "https://imgs.weilaijishi.cn/h5mall/user/group_4.png?x-oss-process=image/resize,w_300,limit_1",
    name: "新零售",
  },
  {
    url:
      "https://imgs.weilaijishi.cn/h5mall/user/group_5.png?x-oss-process=image/resize,w_300,limit_1",
    name: "客服帮助",
  },
  {
    url:
      "https://imgs.weilaijishi.cn/h5mall/user/group_6.png?x-oss-process=image/resize,w_300,limit_1",
    name: "创业帮扶",
  },
  {
    url:
      "https://imgs.weilaijishi.cn/h5mall/user/group_7.png?x-oss-process=image/resize,w_300,limit_1",
    name: "设置",
  },
];

const IconComponent: React.FC = () => {
  return (
    <div className={styles.icon_list_wrap}>
      <div className={styles.icon_list}>
        {IconList.map((item, index) => {
          return (
            <div className={styles.icon_item} key={index}>
              <div className={styles.img_box}>
                <img alt="" src={item.url} />
              </div>
              <div className={styles.img_txt}>{item.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IconComponent;
