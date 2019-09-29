<!--  -->
<template>
  <div class>
    <button @click="backToTop">top</button>
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
      let clientHeight = document.documentElement.clientHeight; //获取可视区域的高度
      let timer = null; //定义一个定时器
      let isTop = true; //定义一个布尔值，用于判断是否到达顶部
      //设置一个定时器
      timer = setInterval(function() {
        //获取滚动条的滚动高度
        let osTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        //用于设置速度差，产生缓动的效果
        let speed = Math.floor(-osTop / 6);
        document.documentElement.scrollTop = document.body.scrollTop =
          osTop + speed;
        isTop = true; //用于阻止滚动事件清除定时器
        if (osTop == 0) {
          clearInterval(timer);
        }
      }, 30);
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
button {
  width: 100px;
  height: 500px;
  background: red;
  position: fixed;
  top: 20px;
}
</style>