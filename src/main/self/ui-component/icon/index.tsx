import React from "react";
import { RouteComponentProps } from 'react-router-dom';
import styles from "./index.scss";

interface Icon {
  url: string;
  name: string;
  path?: string;
}

const IconList: Array<Icon> = [
  {
    url:
      "https://imgs.weilaijishi.cn/h5mall/user/group_0.png?x-oss-process=image/resize,w_300,limit_1",
    name: "基础题",
    path: '/a/basic',
  },
  {
    url:
      "https://imgs.weilaijishi.cn/h5mall/user/group_1.png?x-oss-process=image/resize,w_300,limit_1",
    name: "ECMAScript6",
    path: '/a/ecma6',
  },
  {
    url:
      "https://imgs.weilaijishi.cn/h5mall/user/group_2.png?x-oss-process=image/resize,w_300,limit_1",
    name: "TypeScript",
  },
  {
    url:
      "https://imgs.weilaijishi.cn/h5mall/user/group_3.png?x-oss-process=image/resize,w_300,limit_1",
    name: "ListExample",
    path: "/a/list-example",
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

interface ClickType {
  (params?: any): void;
}

const IconComponent: React.FC<RouteComponentProps> = (props) => {

  const handleClick: ClickType = (item) => {
    props?.history.push(item.path)
  }

  return (
    <div className={styles.icon_list_wrap}>
      <div className={styles.icon_list}>
        {IconList.map((item, index) => {
          return (
            <div className={styles.icon_item} key={index} onClick={() => { handleClick(item) }}>
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
