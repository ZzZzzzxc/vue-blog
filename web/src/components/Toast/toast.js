import Vue from "vue";
import Toast from "./Toast.vue";
let Builder = Vue.extend(Toast);
export default {
  install(vue) {
    vue.prototype.$TOAST = this.getComponent;
  },
  getComponent(msg) {
    //生成组件
    let instance = new Builder({
      propsData: { msg: msg}
    });
    //组件需要挂载在dom元素上
    instance.vm = instance.$mount();
    document.body.appendChild(instance.vm.$el);
    return instance;
  }
};
