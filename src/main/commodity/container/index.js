import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LoadProductAsync } from "../actions/actionCreate";
import Banner from "../component/banner/banner";

const Commodity = () => {
  const store = useSelector(state => state.goodsReducer);
  const dispatch = useDispatch();
  const { productInfo } = store;

  useEffect(() => {
    dispatch(LoadProductAsync());
  }, [dispatch]);

  // console.log("productInfo", productInfo);

  const { imgList } = productInfo;
  return (
    <React.Fragment>
      <Banner data={imgList} />
    </React.Fragment>
  );
};

export default Commodity;
