<template>
  <div>
    <Header />
    <!-- <router-view :key="$route.path" /> -->
    <transition name="fade">
      <router-view :key="$route.path"></router-view>
    </transition>
    <Footer />
    <BackToTop/>
    <Notice/>
    <MusicPlayer/>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Header from "./Header";
import Footer from "./Footer";
import Notice from '../components/Notice'
import BackToTop from '../components/BackToTop'
import MusicPlayer from '../components/MusicPlayer/MusicPlayer'
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Header,
    Footer,
    Notice,
    BackToTop,
    MusicPlayer
  },
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
  mounted() {
    this.$Alert.info({
      content: "你好啊",
       duration: 3
    });
  },
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>