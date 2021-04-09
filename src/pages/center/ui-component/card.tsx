import React from "react";
import headImg from "@assets/center/default-face.png";
import codeImg from "@assets/center/code-icon-2.png";
import headLogoImg from "@assets/center/icon-level-2-0.png";
import styles from "./index.scss";

interface IconObj {
    icon: string;
    name: string;
}

const IconList: Array<IconObj> = [
    {
        icon: require('../../../assets/center/c-icon-1.png').default,
        name: '房贷计算'
    },
    {
        icon: require('../../../assets/center/c-icon-2.png').default,
        name: '复利计算'
    },
    {
        icon: require('../../../assets/center/c-icon-3.png').default,
        name: '工资计算'
    },
    {
        icon: require('../../../assets/center/c-icon-4.png').default,
        name: '奖金计算'
    },
    {
        icon: require('../../../assets/center/c-icon-5.png').default,
        name: 'UI框架'
    }
]

const CardComponent: React.FC = () => {
  return (
    <div className={styles.header_wrap}>
      <div className={styles.box_wrap}>
        <div className={styles.info}>
          <div className={styles.info_header}>
            <div className={styles.info_leftBox}>
              <img alt="头像" src={headImg} />
              <div className={styles.content_box}>
                <div className={styles.member_name}>
                  {"name"}
                  <div className={styles.invete}>
                    <div className={styles.inviteCodeContent}>
                      <span className={styles.id}>
                        <i className={styles.commonCopyClip}>
                          会员码：{"12345"}
                          <span className={styles.copyWord}></span>
                        </i>
                      </span>
                    </div>
                    <div className={styles.codeBox}>
                      <img alt="" src={codeImg}></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img alt="" src={headLogoImg}></img>
          </div>
          <div className={styles.info_content}>
            <div className={styles.content_item}>
              <div className={styles.money}>
                ￥<span>1</span>.78
              </div>
              <div className={styles.text}>累计收益</div>
              <div className={styles.table}>收益报表</div>
            </div>
            <div className={styles.content_item}>
              <div className={styles.money}>
                ￥<span>1</span>.78
              </div>
              <div className={styles.text}>账户余额</div>
              <div className={styles.table}>立即提现</div>
            </div>
            <div className={styles.content_item}>
              <div className={styles.money}>
                ￥<span>1</span>.78
              </div>
              <div className={styles.text}>即将到账</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.icon_wrap}>
          <div className={styles.icon_list_box}>
              <div className={styles.icon_content}>
                  {
                      IconList.map((item, index) => {
                          return <div className={styles.icon_item} key={index}>
                              <div className={styles.img_box}>
                                  <img alt='' src={item.icon}/>
                              </div>
                              <div className={styles.img_txt}>{item.name}</div>
                          </div>
                      })
                  }
              </div>
          </div>
      </div>
    </div>
  );
};

export default CardComponent;
