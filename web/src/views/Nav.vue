<!--  -->
<template>
  <nav ref="nav">
    <div class="container">
      <router-link tag='div' to="/" class="logo"><img src="../assets/dog.png" style="display:inline-block;max-width:2rem" >BLOG</router-link>
      <ul v-show="isShow">
        <router-link to="/" tag="li"><img src="../assets/dog.png" style="display:inline-block;max-width:1.4rem" >首页</router-link>
        <router-link to="/about" tag="li"><img src="../assets/dog.png" style="display:inline-block;max-width:1.8rem" >关于我</router-link>
        <router-link to="/archieve" tag="li"><img src="../assets/dog.png" style="display:inline-block;max-width:2.2rem" >归档</router-link>
        <router-link to="/friend" tag="li"><img src="../assets/dog.png" style="display:inline-block;max-width:2.6rem" >友链</router-link>
        <router-link to="/todo" tag="li"><img src="../assets/dog.png" style="display:inline-block;max-width:3rem" >TODO</router-link>
      </ul>
      <div class="btn"  @click.stop="didClickMenus">More</div>
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
  z-index: 3;
}

.logo {
  float: left;
  font-size: 2rem;
}

@media screen and (max-width: 1100px) {
  nav{
    background: rgba(255, 134, 50, 0.8);
  }
  ul {
    width: 12rem;
    position: absolute;
    right: 2rem;
    top: 5rem;
    background: white;
    color: gray;
     box-shadow: 0.5rem 0.5rem 1.8rem #888;
  }
  li {
    width: 100%;
    text-align: center;
    margin: 0 0;
    font-size: 2rem;
  }
  .logo{
    font-size:2.4rem;
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
    font-size: 1.4rem;
  }
}

li:hover {
  color: gray;
}
.btn {
  float: right;
  font-size: 2.4rem;
}
</style>