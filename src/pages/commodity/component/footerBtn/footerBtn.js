import React from "react";
import { useHistory } from "react-router-dom";
import { setlocalStorage } from "@utils/storage";
import styles from "./index.scss";

const FooterBtn = ({ data }) => {
  const history = useHistory();
  const handleClick = () => {
    // console.log(data);
    const cartInfo = {
      name: data.name,
      img: data.masterImg,
      price: data.price,
      commission: data.commission,
    };
    setlocalStorage("cartInfo", cartInfo);
    history.push("/checkoutPage");
  };
  return (
    <div className={styles.footerWrap}>
      <div className={styles.footerBox}>
        <div className={styles.left}>
          <div className={styles.cart}>
            <svg
              t="1618019296842"
              className={styles.icon}
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              p-id="1189"
              width="200"
              height="200"
            >
              <path
                d="M615.7824 314.8288h-81.6128c-14.1312 0-25.6-11.4688-25.6-25.6s11.4688-25.6 25.6-25.6h81.6128c14.1312 0 25.6 11.4688 25.6 25.6s-11.4688 25.6-25.6 25.6z"
                fill="#FF64C8"
                p-id="1190"
              ></path>
              <path
                d="M945.5616 286.7712c-11.008-14.6944-27.8528-23.0912-46.2336-23.0912h-181.6064c-14.1312 0-25.6 11.4688-25.6 25.6s11.4688 25.6 25.6 25.6h181.6064c2.7136 0 4.352 1.4336 5.2224 2.6112 0.9216 1.1776 1.792 3.1744 1.0752 5.7856l-79.872 273.408a26.38848 26.38848 0 0 1-25.1904 18.8928H372.8896c-13.0048 0-24.2176-9.728-26.0096-22.6304L308.3776 314.88h130.4576c14.1312 0 25.6-11.4688 25.6-25.6s-11.4688-25.6-25.6-25.6H301.0048l-7.7312-50.7904c-4.1984-32-31.5904-56.064-63.8976-56.064H93.8496c-14.1312 0-25.6 11.4688-25.6 25.6s11.4688 25.6 25.6 25.6H229.376c6.656 0 12.288 4.9664 13.1072 11.5712 0.0512 0.256 0.0512 0.4608 0.1024 0.7168l11.0592 72.6528 42.496 306.9952c5.2736 38.0928 38.2464 66.816 76.6976 66.816h427.6736c34.1504 0 64.7168-22.9376 74.3424-55.7056l79.872-273.408c5.2224-17.664 1.8432-36.1984-9.1648-50.8928zM436.5312 889.6512c-53.3504 0-96.768-43.4176-96.768-96.768s43.4176-96.768 96.768-96.768 96.768 43.4176 96.768 96.768-43.4176 96.768-96.768 96.768z m0-142.336c-25.1392 0-45.568 20.4288-45.568 45.568s20.4288 45.568 45.568 45.568 45.568-20.4288 45.568-45.568-20.4288-45.568-45.568-45.568zM730.9824 889.6512c-53.3504 0-96.768-43.4176-96.768-96.768s43.4176-96.768 96.768-96.768 96.768 43.4176 96.768 96.768-43.4176 96.768-96.768 96.768z m0-142.336c-25.1392 0-45.568 20.4288-45.568 45.568s20.4288 45.568 45.568 45.568 45.568-20.4288 45.568-45.568-20.4288-45.568-45.568-45.568z"
                fill="#585266"
                p-id="1191"
              ></path>
              <path
                d="M739.072 553.728H440.3712c-14.1312 0-25.6-11.4688-25.6-25.6s11.4688-25.6 25.6-25.6h298.7008c14.1312 0 25.6 11.4688 25.6 25.6 0 14.1824-11.4176 25.6-25.6 25.6z"
                fill="#585266"
                p-id="1192"
              ></path>
            </svg>
          </div>
          <div className={styles.txt}>?????????</div>
        </div>
        <div className={styles.right}>
          <div className={styles.btn} onClick={handleClick}>
            ????????????
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBtn;
