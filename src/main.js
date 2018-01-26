// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// let Vue = require('vue')
import App from './App'
import router from './router'
// import 'babel-polyfill'
import Fastclick from 'fastclick'
Vue.config.productionTip = false
Fastclick.attach(document.body)

import VueLazyload from 'vue-lazyload'
/* eslint-disable no-new */

Vue.use(VueLazyload, {
  loading: require('common/image/default.png')
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
