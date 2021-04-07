import { Mall } from "./main/mall";
import Discover from "./main/discover";
import Center from "./main/center";
import { Self } from "./main/self";
import { Commodity } from "./main/commodity";
import { ListExample, Basic, Ecma6 } from './main/selfBasic'

const routes = [
  {
    path: "/home",
    component: Mall,
  },
  {
    path: "/discover",
    component: Discover,
  },
  {
    path: "/center",
    component: Center,
  },
  {
    path: "/self",
    component: Self,
    routes: []
  },
  //二级路由如何使用?
  {
    path: "/a/list-example",
    component: ListExample,
  },
  {
    path: "/a/basic",
    component: Basic,
  },
  {
    path: "/a/ecma6",
    component: Ecma6,
  },
  {
    path: "/commodity",
    component: Commodity,
  },
];

export default routes;
