// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from "axios";
import store from './store'
Vue.config.productionTip = false

const base = axios.create({
  baseURL: "http://localhost:4000"
});
Vue.prototype.$http = base;
/* eslint-disable no-new */
const vm = new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
