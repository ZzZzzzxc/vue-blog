import Vue from "vue";
import './plugins/axios'
import App from "./App.vue";
import router from "./router";
import "./assets/css/base.css";
import scrollFunc from "./assets/animate/scroll";
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";
Vue.use(mavonEditor);
Vue.config.productionTip = false;
//添加滚轮监听
if (document.addEventListener) {
  document.addEventListener("DOMMouseScroll", scrollFunc.scrollFunc, false);
}
//滚动滑轮触发scrollFunc方法
window.onmousewheel = document.onmousewheel = scrollFunc.scrollFunc;


import axios from 'axios'
Vue.prototype.$http = axios.create({
  baseURL: process.env.VUE_APP_API_URL || '/web/api'
  // baseURL: 'http://localhost:3000/web/api'
})
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
