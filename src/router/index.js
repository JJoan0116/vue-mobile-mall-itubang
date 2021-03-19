import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home';

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
  }
];

const router = new VueRouter({
  routes
});

export default router;
