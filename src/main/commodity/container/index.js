import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LoadProductAsync } from "../actions/actionCreate";
import Banner from "../component/banner/banner";
import styles from './index.scss'

const Commodity = (props) => {
  const store = useSelector(state => state.goodsReducer);
  const dispatch = useDispatch();
  const { productInfo } = store;

  useEffect(() => {
    dispatch(LoadProductAsync());
  }, [dispatch]);

  const handleClick = () => {
    props.history.goBack()
  }

  const { imgList } = productInfo;
  return (
    <div className={styles.wrap}>
      <Banner data={imgList} />
      <div className={styles.backIcon} onClick={handleClick}></div>
    </div>
  );
};

export default Commodity;
