import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);

import request from "@/utils/request"
//名称是必须是request,JsonTable组件会使用request
Vue.prototype.$request = request;

// JsonTable start
import JsonToElementUI from 'json-to-element-ui';
Vue.use(JsonToElementUI);
// JsonTable end

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
