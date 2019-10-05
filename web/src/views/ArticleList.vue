<!--  -->
<template>
  <div class="body">
    <ArticleCard v-for="(value,key) in articles" :key="key" :articles="articles" :index="key" />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import ArticleCard from "../components/ArticleCard";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: { ArticleCard },
  props: {
    id: {}
  },
  data() {
    //这里存放数据
    return {
      articles: [
        {
          tags: [],
          title: "",
          subTitle: "",
          description: "",
          context: "",
          createTime: "",
          lastEditTime: "",
          _id: ""
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
    async fetchArticles() {
      if (this.id) {
        const res = await this.$http.get(`tags/${this.id}`);
        this.articles = res.data[0].articlesList;
        console.log(res.data[0].articlesList)
      } else {
        const res = await this.$http.get("articles/list");
        this.articles = res.data;
        this.articles.reverse()
      }
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.fetchArticles();
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
.body {
  width: 92%;
  margin: 0 4%;
  padding: 0.1rem 0.1rem;
  box-shadow: 0.5rem 0.5rem 1.8rem #888;
  /* height: 100%; */
  /* background: gold; */
}
</style>