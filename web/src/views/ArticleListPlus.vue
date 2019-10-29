<!--  -->
<template>
  <div>
    <div class="body">
      <ArticleCard
        v-for="(value,key) in curArticles"
        :key="key"
        :articles="curArticles"
        :index="key"
      />
    </div>
    <Paging :sum="sum" :num="num" v-if="sum" @curChange="curChange" />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import ArticleCard from "../components/ArticleCard";
import Paging from "../components/Paging/Paging";
import { getArticlesList, getTag } from "../service";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: { ArticleCard, Paging },
  props: {
    id: {}
  },
  data() {
    //这里存放数据
    return {
      //每页条数
      num: 5,
      //总条数
      sum: 0,
      //当前页数
      cur: Number,
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
      ],
      curArticles: []
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
    cur() {
      this.getCurArticles();
    }
  },
  //方法集合
  methods: {
    // async fetchArticles() {
    //   if (this.id) {
    //     const res = await this.$http.get(`tags/${this.id}`);
    //     this.articles = res.data[0].articlesList;
    //     console.log(res.data[0].articlesList);
    //   } else {
    //     const res = await this.$http.get("articles/list");
    //     this.articles = res.data;
    //     this.articles.reverse();
    //   }
    //   this.$nextTick(function() {
    //     this.sum = this.articles.length;
    //     if (!this.articles[0]) {
    //       this.$TOAST("还没有东西哦👨‍✈️");
    //     }
    //   });
    // },
    async fetchArticles() {
      if (this.id) {
        const res = await getTag(this.id);
        this.articles = res[0].articlesList;
      } else {
        const res = await getArticlesList();
        this.articles = res;
        this.articles.reverse();
      }
      this.$nextTick(function() {
        this.sum = this.articles.length;
        if (!this.articles[0]) {
          this.$Alert.info({
            content: "还没有东西哦👨‍✈️"
          });
          // this.$TOAST("还没有东西哦👨‍✈️");
        }
      });
    },

    //获取当前页码
    curChange(data) {
      this.cur = data;
    },
    //获取当前要展示的数据
    getCurArticles() {
      let end;
      let start = this.num * (this.cur - 1);
      this.cur == Math.ceil(this.sum / this.num)
        ? (end = this.articles.length)
        : (end = this.num * this.cur);
      this.curArticles = this.articles.slice(start, end);
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
  height: 101rem;
  width: 92%;
  margin: 0 4%;
  padding: 0.1rem 0.1rem;
  box-shadow: 0.5rem 0.5rem 1.8rem #888;
  user-select: none;
}
@media screen and (max-width: 768px) {
  .body {
    width: 96%;
    margin: 0 2%;
  }
}
</style>