import { Mall } from "./pages/mall";
import Discover from "./pages/discover";
import Center from "./pages/center";
import { Self } from "./pages/self";
import { Commodity } from "./pages/commodity";
import { ListExample, Basic, Ecma6, Regx } from "./pages/selfBasic";

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
    routes: [],
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
    path: "/a/basic/regx",
    component: Regx,
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
