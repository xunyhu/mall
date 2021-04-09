import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LoadProductAsync } from "../actions/actionCreate";
import Banner from "../component/banner/banner";
import Title from "../component/title/title";
import styles from './index.scss'

const Commodity = (props) => {
  const store = useSelector(state => state.goodsReducer);
  const dispatch = useDispatch();
  const { productInfo } = store;

  useEffect(() => {
    !productInfo.pid && dispatch(LoadProductAsync());
  }, [dispatch, productInfo]);

  const handleClick = () => {
    props.history.goBack()
  }

  const { imgList } = productInfo;
  console.log('productInfo', productInfo)
  return (
    <div className={styles.wrap}>
      <Banner data={imgList} />
      <Title data={productInfo} />
      <div className={styles.backIcon} onClick={handleClick}></div>
    </div>
  );
};

export default Commodity;
