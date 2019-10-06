import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
//自定义css
import "./assets/css/base.css";

//markdown插件
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";
Vue.use(mavonEditor);

//代码高亮插件
import hljs from "highlight.js"; // 引入JS
import "highlight.js/styles/googlecode.css"; //样式文件
Vue.directive("highlight", function(el) {
  let blocks = el.querySelectorAll("pre code");
  blocks.forEach(block => {
    hljs.highlightBlock(block);
  });
});

Vue.config.productionTip = false;

//NAV滚动动画
import scrollFunc from "./assets/animate/scroll";
//添加滚轮监听
if (document.addEventListener) {
  document.addEventListener("DOMMouseScroll", scrollFunc.scrollFunc, false);
}
//滚动滑轮触发scrollFunc方法
window.onmousewheel = document.onmousewheel = scrollFunc.scrollFunc;

//axios
import axios from "axios";
Vue.prototype.$http = axios.create({
  baseURL: process.env.VUE_APP_API_URL || '/web/api'
  // baseURL: "http://localhost:3000/web/api"
});
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
