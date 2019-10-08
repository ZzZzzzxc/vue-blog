<!--  -->
<template>
  <div class="card-body">
    <div class="title">{{model[0].name}}</div>
    <div class="avatar">
      <img :src="model[0].avatar" alt />
    </div>
    <div class="word">{{model[0].description}}</div>
    <div class="word">{{model[0].context}}</div>
    <div class="social"></div>
    <div class="footer line"></div>
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
    return {
      model: [
        {
          avatar: "",
          name: "",
          description: "",
          context: ""
        }
      ]
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    async fetchCard() {
      const res = await this.$http.get("abouts/list");
      this.model = res.data;
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.fetchCard();
  },
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
.card-body {
  width: 98%;
  margin: 5rem 1%;
  /* background: blue; */
  padding: 3%;
  box-shadow: 0.5rem 0.5rem 1.8rem #888;
  transform: rotate(-5deg);
  user-select: none;
}
.card-body > * {
  text-align: center;
}
.title {
  font-size: 1.8rem;
  font-weight: bold;
}
.avatar {
  margin: 4rem auto;
  width: 70%;
  transition: 0.5s;
}

img {
  /* border-radius: 50%; */
  border-radius: 1rem;
  transition: 0.5s;
  transform: rotate(-10deg);
}
.avatar:hover {
  width: 80%;
  margin: 2rem auto;
}
img:hover {
  box-shadow: 0.7rem 0.8rem 1rem #dc5bf0, -1rem -1rem 2rem #c9c91e;
  /* border-radius: 1rem; */
  border-radius: 50%;
  transform: rotate(360deg);
}
.word {
  color: #ccc;
  font-size: 1.4rem;
  margin: 0.5rem 0;
}
.footer {
  margin-top: 2rem;
  position: relative;
}
</style>