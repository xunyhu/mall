import React from "react";
import { NavBar, Icon, List,  Accordion } from "antd-mobile";

const Item = List.Item;
const Brief = Item.Brief;

const ListExample = (porps: any) => {
  const func = () => {
    //   a instanceof
    // typeof
    // Object.prototype.toString
  };

  const onChange = (key: any) => {
    console.log(key);
  }

  return (
    <div>
      <NavBar
        mode="light"
        icon={<Icon type="left" />}
        onLeftClick={() => porps.history.goBack() }
      >
        ECMAScript6-Basic
      </NavBar>
      <List renderHeader={() => "ECMAScript6"} className="my-list">
        <Item>函数的扩展</Item>
      </List>
      {/* <Accordion defaultActiveKey="0" className="my-accordion" onChange={onChange}>
          <Accordion.Panel header="Title 1">
            <List className="my-list">
              <List.Item>content 1</List.Item>
              <List.Item>content 2</List.Item>
              <List.Item>content 3</List.Item>
            </List>
          </Accordion.Panel>
          <Accordion.Panel header="Title 2" className="pad">this is panel content2 or other</Accordion.Panel>
          <Accordion.Panel header="Title 3" className="pad">
            text text text text text text text text text text text text text text text
          </Accordion.Panel>
        </Accordion> */}
    </div>
  );
};

export default ListExample;
