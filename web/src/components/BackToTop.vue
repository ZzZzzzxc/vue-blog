<!--  -->
<template>
  <div class>
    <div @click="backToTop" title="回到顶部">🎈</div>
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
  methods: {
    backToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
     
    }
  },
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
div {
  border-radius: 50%;
  width: 6rem;
  height: 6rem;
  /* background: red; */
  position: fixed;
  top: 65rem;
  right: 2rem;
  text-align: center;
  line-height: 6rem;
  font-size: 2.4rem;
  font-weight: bolder;
  user-select: none;
  padding: 0 1rem;
  background: rgb(22, 149, 187, 0.1);
  transition: 1s;
}
div:hover {
  width: 6.6rem;
  height: 6.6rem;
  font-size: 2.8rem;
  line-height: 6.6rem;
  right: 1.4rem;
  top: 64.4rem;
  background: rgb(200, 227, 235);
  box-shadow: 0.1rem 0.1rem 1.8rem #888;
  /* transform: rotate(20deg) */
}

@media screen and (max-width: 900px) {
  div {
    display: none;
  }
}
</style>