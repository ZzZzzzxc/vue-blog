<!--  -->
<template>
  <transition name="box">
    <div id="toast" v-if="alive">{{msg}}</div>
  </transition>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  name: "toast",
  components: {},
  props:{
    msg:String
  },
  data() {
    //这里存放数据
    return {
      alive: false,
      timer: null
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    destroyToast() {
      this.alive = true;
      if (this.timer) {
        clearTimeOut(this.timer);
      } else {
        this.timer = setTimeout(() => {
          document.getElementById("toast").style.opacity = 0;
          this.alive = false;
        }, 2000);
      }
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.destroyToast();
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
#toast {
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: wheat;
  text-align: center;
  height: 6rem;
  line-height: 6rem;
  width: 16rem;
  user-select: none;
  transition: 1s;
  opacity: 1;
  font-size: 2rem;
  font-weight: bolder;
  border-radius: 4rem
}
.box-enter,
.box-leave-to {
  opacity: 0;
}
.box-enter-to,
.box-leave {
  opacity: 1;
}
.box-enter-active,
.box-leave-active {
  transition: all 1s;
}
</style>