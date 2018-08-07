// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'


Vue.config.productionTip = false
/* eslint-disable no-new */
var app = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

// 引用組件
import axios from 'axios'
Vue.prototype.$axios = axios

let cloneObj = function (obj) {
    console.log('ccc');
    var newObj = {};
    if (obj instanceof Array) {
        newObj = [];
    }
    for (var key in obj) {
        var val = obj[key];
        newObj[key] = typeof val === 'object' ? cloneObj(val): val;
    }
    return newObj;
};
Vue.prototype.cloneObj = cloneObj

import commonApi from './common/api.js'
Vue.use( commonApi )
