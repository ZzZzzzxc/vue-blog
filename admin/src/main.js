import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import router from "./router";
import "./plugins/element.js";
import "./assets/css/base.css";

Vue.config.productionTip = false;
import http from "./http";
Vue.prototype.$http = http;

import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";
Vue.use(mavonEditor);

Vue.mixin({
  computed: {
    uploadUrl() {
      return this.$http.defaults.baseURL + "/upload";
    }
  },
  methods: {
    getAuthHeaders() {
      return {
        Authorization: `Bearer ${localStorage.token || ""}`
      };
    }
  }
});
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
