import Vue from 'vue';
import VueLazyload from 'vue-lazyload';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/css/global.css';

const placeholderImage = require('../src/assets/images/placeholder.png');

Vue.config.productionTip = false;
Vue.use(VueLazyload, {
  loading: placeholderImage
});

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
