<!--  -->
<template>
  <div class="header">
    <Nav />
    <div class="container">
      <div class="title">Title</div>
      <div class="sub-title">我干了什么 究竟拿了时间换了什么</div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Nav from "./Nav";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: { Nav },
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
.header {
  position: absolute;
  top: 0;
  background-image: url("../assets/home-bg.jpg");
  height: 34rem;
  width: 100%;
  background-color: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 50%;
}

.container {
  margin-top: 5rem;
  /* position: absolute; */
  margin-top: 30%;
}

.title {
  color: #fff;
  font-size: 8rem;
  text-align: center;
  font-weight: bolder;
}
.sub-title {
  color: #fff;
  font-size: 2rem;
  text-align: center;
}
</style>