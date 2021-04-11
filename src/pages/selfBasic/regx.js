import React, { useState } from "react";
import { List, InputItem, Toast } from "antd-mobile";

const RegComponent = () => {
  const [hasErrorr, setHasErrorr] = useState(false);
  const [value, setValue] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyErrorr, setCompanyErrorr] = useState(false);

  const onErrorClick = () => {
    Toast.info("请输入正确的格式");
  };

  const onChange = (value, type) => {
    switch (type) {
      case "phone":
        if (value.replace(/\s/g, "").length < 11) {
          setHasErrorr(true);
        } else {
          setHasErrorr(false);
        }
        setValue(value);
        break;
      default:
        return;
    }
  };

  return (
    <div>
      <List renderHeader={() => "正则校验"}>
        <InputItem
          type="phone"
          placeholder="请输入手机号"
          error={hasErrorr}
          onErrorClick={onErrorClick}
          onChange={(value) => {
            onChange(value, "phone");
          }}
          value={value}
        >
          手机号码
        </InputItem>
        <InputItem
          type="string"
          placeholder="请输入公司名称"
          error={companyErrorr}
          onErrorClick={onErrorClick}
          onChange={(value) => {
            onChange(value, "company");
          }}
          value={companyName}
        >
          公司名称
        </InputItem>
      </List>
    </div>
  );
};

export default RegComponent;
