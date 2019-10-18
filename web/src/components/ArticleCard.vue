<!--  -->
<template>
  <div class="card-body" @click="$router.push(`/articles/${articles[index]._id}`)">
    <div class="card">
      <h2>{{articles[index].title}}</h2>
      <h3>{{articles[index].subTitle}}</h3>
      <div class="description">{{articles[index].description}}</div>
      <div class="context of">{{articles[index].context}}</div>
      <p class="time">发布于——{{articles[index].createTime}}</p>
      <p class="time">最后编辑于——{{articles[index].lastEditTime}}</p>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    articles: Array,
    index: Number
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
<style scoped>
.card-body {
  position: relative;
  height: 20rem;
  width: 98%;
  /* background: blue; */
  padding: 0 3%;
  margin: 0 auto;
  border-bottom: 0.1rem solid #a3a3a3;
  transition: 0.2s;
  user-select: none;
  line-height: 1.5;
}
.card-body:hover {
  box-shadow: 0.1rem 0.1rem 1.8rem #888;
}

.card {
  position: absolute;
  top: 50%;
  transform: translateY(-50%)
}
h2 {
  font-size: 2.8rem;
}
h3 {
  font-size: 1.8rem;
}
.description {
  font-size: 1.8rem;
  color: rgb(0, 228, 201, 1);
}
.context {
  font-size: 1.6rem;
  color: #a3a3a3;
}
.time {
  font-size: 1.4rem;
  color: #a3a3a3;
}
</style>