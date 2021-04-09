import React from "react";
import { NavBar, Icon, List } from "antd-mobile";

const Item = List.Item;
const Brief = Item.Brief;

const ListExample = (porps) => {
  const func = () => {
    //   a instanceof
    // typeof
    // Object.prototype.toString
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
    </div>
  );
};

export default ListExample;
