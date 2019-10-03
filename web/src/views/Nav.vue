<!--  -->
<template>
  <nav>
    <div class="container">
      <div class="logo">BLOG</div>
      <ul v-show="isShow">
        <router-link to="/" tag="li">HOME</router-link>
        <router-link to="/about" tag="li">ABOUT</router-link>
        <router-link to="/archieve" tag="li">ARCHIEVE</router-link>
        <router-link to="/todo" tag="li">TODO</router-link>
      </ul>
      <div class="btn"  @click.stop="didClickMenus">click</div>
    </div>
  </nav>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      isShow:true,
      screenWidth: document.body.clientWidth
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
    screenWidth(val) {
      this.screenWidth = val;
      if(val > 1083){
        this.isShow = true
      }else{
        this.isShow = false
      }
    }
  },
  //方法集合
  methods: {
    didClickMenus(){
      this.isShow=!this.isShow
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    const that = this;
    window.onresize = () => {
      return (() => {
        // window.screenWidth = document.body.clientWidth;
        // that.screenWidth = window.screenWidth;
        that.screenWidth = document.body.clientWidth
      })();
    };
    document.onclick = () => {
      if (this.isShow && this.screenWidth<1083) {
        this.isShow = false;
      }
    };
    if(this.screenWidth < 1083){
      this.isShow = false
    }
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
nav {
  background: rgba(0, 255, 196, 0);
  height: 5rem;
  line-height: 5rem;
  width: 100%;
  font-size: 1.2rem;
  font-weight: 900;
  color: #ffffff;
  position: fixed;
  top: 0;
  transition: 0.9s;
  
}

.logo {
  float: left;
}
@media screen and (max-width: 1100px) {
  ul {
    width: 12rem;
    position: absolute;
    right: 2rem;
    top: 5rem;
    background: white;
    color: gray;
  }
  li {
    width: 100%;
    text-align: center;
    margin: 0 0;
  }
}
@media screen and (min-width: 1100px) {
  .btn {
    display: none;
  }
  ul {
    float: right;
  }
  li {
    float: left;
    margin: 0 2rem;
  }
}

li:hover {
  color: gray;
}
.btn {
  float: right;
}
</style>