import React from "react";
import { NavBar, Icon, List } from "antd-mobile";
import { useHistory } from "react-router-dom";

const Item = List.Item;
const Brief = Item.Brief;

const ListExample = (porps) => {
  const func = () => {
    //   a instanceof
    // typeof
    // Object.prototype.toString
  };

  const history = useHistory();

  const handleClick = () => {
    history.push("/a/basic/regx");
  };

  return (
    <div>
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => porps.history.goBack()}
      >
        JS-Basic
      </NavBar>
      <List renderHeader={() => "JS基础-面试题"} className="my-list">
        <Item extra={"类型判断"}>
          typeOf, instanceof, Object.prototype.toString
        </Item>
      </List>
      <List renderHeader={() => "正则表达式"} className="my-list">
        <Item
          arrow="horizontal"
          thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
          multipleLine
          onClick={handleClick}
        >
          正则
        </Item>
      </List>
    </div>
  );
};

export default ListExample;
