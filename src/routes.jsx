import { Mall } from './main/mall'
import Discover from './main/discover'
import Center from './main/center'
import { Self } from './main/self'
import { Commodity } from './main/commodity'

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
  },
  {
    path: "/commodity",
    component: Commodity,
  },
];

export default routes;