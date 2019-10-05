<!--  -->
<template>
  <div class="notice-body" ref="notice">
      <div>^^</div>
    <div class="title">公告牌</div>
    <div class="start">没事，我就是想say个</div>
    <div class="context">Hi💋</div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style  scoped>
.notice-body {
  background: #ffffff;
  width: 10rem;
  padding: 1rem 1rem;
  min-height: 20rem;
  position: fixed;
  text-align: center;
  top: 40rem;
  right: 1rem;
  box-shadow: 0.1rem 0.1rem 1.8rem #888;
  transform: rotate(-10deg);
  transition: 1s ;
  opacity: 0.8;
}
.notice-body:hover {
    right: -4rem;
}
.title {
  font-size: 2rem;
  margin: 1rem 0;
  font-weight: bolder;
}
.start {
  font-size: 1.2rem;
  margin: 1rem 0;
}
.context {
  font-size: 1.8rem;
  margin: 1rem 0;
}
@media screen and (max-width: 1000px) {
  .notice-body {
    display: none;
  }
}
</style>