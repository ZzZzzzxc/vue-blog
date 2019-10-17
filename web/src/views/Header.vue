<!--  -->
<template>
  <div id="header" ref="change">
    <Nav />

    <div class="container" ref="bg">
      <div class="title">Zhangxc Blog</div>
      <div class="sub-title">
        <div id="word-box"></div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Nav from "./Nav";
import Input from "../assets/animate/word";
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
  watch: {
    $route(to, from) {
      // console.log(to.path);
      // let ele = document.getElementById("header");
      let ele = this.$refs.change;
      let bg = this.$refs.bg;
      // console.log(to)
      if (document.documentElement.offsetWidth > 1080) {
        if (to.name === "article") {
          ele.style.height = "20rem";
          bg.style.display = "none";
        } else {
          ele.style.height = "34rem";
          bg.style.display = "block";
        }
      }
    }
  },
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    //打字特效
    Input.input(
      "欢迎来到我的小站，喜欢可以收藏。",
      "Welcome to my blog，If you like it, please collect it."
    );
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
#header {
  position: relative;
  /* top: -5rem; */
  background-image: url("https://vue-blog-1259658719.cos.ap-chengdu.myqcloud.com/sky.jpg");
  height: 34rem;
  width: 100%;
  background-color: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 20%;
  transition: 0.5s;
  background-size: 100%;
  user-select: none;
  transition: background 3s;
  transition-duration: ease-in-out;
  font-family: "Comic Sans MS", cursive, sans-serif !important;
}

#header:hover {
  background-size: 120%;
  /* background-position: center 100%; */
}
@media screen and (max-width: 799px) {
  #header {
    height: 20rem;
    background-size: 120%;
  }
}
@media screen and (max-width: 370px) {
  #header {
    height: 20rem;
    background-size: 140%;
  }
}
.container {
  padding-top: 5rem;
}

.title {
  color: #fff;
  font-size: 6rem;
  text-align: center;
  font-weight: bolder;
}
.sub-title {
  color: #fff;
  font-size: 2rem;
  text-align: center;
}
</style>