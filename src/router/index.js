import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '../views/App';
import Home from '../views/Home';
import Detail from '../views/Detail';
import Cart from '../views/Cart';

Vue.use(VueRouter);

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  //   component: import(/* webpackChunkName: "home" */ '../views/Home')
  // },
  {
    path: '/',
    component: App,
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: Home,
        meta: {
          title: '首页'
        }
      },
      {
        path: '/cart',
        component: Cart,
        meta: {
          title: '购物车'
        }
      }
    ]
  },
  {
    path: '/detail/:id',
    component: Detail,
    meta: {
      title: '详情页'
    }
  }
];

const router = new VueRouter({
  routes
});

export default router;
