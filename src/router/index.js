import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';
import Detail from '../views/Detail';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
    // component: import(/* webpackChunkName: "home" */ '../views/Home')
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
    // component: import(/* webpackChunkName: "home" */ '../views/Home')
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }
];

const router = new VueRouter({
  routes
});

export default router;
