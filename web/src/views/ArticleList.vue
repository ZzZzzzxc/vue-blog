<!--  -->
<template>
  <div class="body">
    <ArticleCard v-for="(value,key) in articles" :key="key" :articles='articles' :index='key'/>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import ArticleCard from "../components/ArticleCard";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: { ArticleCard },
  data() {
    //这里存放数据
    return {
      articles: [
        {
          title: "Peter John Landin",
          subTitle: "「计算机科学偶像」- 彼得·约翰·兰丁",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate assumenda, perspiciatis nostrum perferendis beatae maiores non quas officia accusamus quasi soluta temporibus quae sequi id quaerat nobis ullam officiis excepturi.",
          time: "September 13, 2019"
        },
        {
          title: "My Spacemacs Workflow",
          subTitle: "From Vim to Spacemacs",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate assumenda, perspiciatis nostrum perferendis beatae maiores non quas officia accusamus quasi soluta temporibus quae sequi id quaerat nobis ullam officiis excepturi.",
          time: "September 13, 2019"
        },
        {
          title: "把「终端下的 Vim」作为 macOS Finder 的打开方式",
          subTitle: "Open file with terminal Vim from the macOS Finder",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate assumenda, perspiciatis nostrum perferendis beatae maiores non quas officia accusamus quasi soluta temporibus quae sequi id quaerat nobis ullam officiis excepturi.",
          time: "September 13, 2019"
        },
        {
          title: "把「终端下的 Vim」作为 macOS Finder 的打开方式",
          subTitle: "Open file with terminal Vim from the macOS Finder",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate assumenda, perspiciatis nostrum perferendis beatae maiores non quas officia accusamus quasi soluta temporibus quae sequi id quaerat nobis ullam officiis excepturi.",
          time: "September 13, 2019"
        },
        {
          title: "把「终端下的 Vim」作为 macOS Finder 的打开方式",
          subTitle: "Open file with terminal Vim from the macOS Finder",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate assumenda, perspiciatis nostrum perferendis beatae maiores non quas officia accusamus quasi soluta temporibus quae sequi id quaerat nobis ullam officiis excepturi.",
          time: "September 13, 2019"
        },
        {
          title: "把「终端下的 Vim」作为 macOS Finder 的打开方式",
          subTitle: "Open file with terminal Vim from the macOS Finder",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate assumenda, perspiciatis nostrum perferendis beatae maiores non quas officia accusamus quasi soluta temporibus quae sequi id quaerat nobis ullam officiis excepturi.",
          time: "September 13, 2019"
        },
        {
          title: "把「终端下的 Vim」作为 macOS Finder 的打开方式",
          subTitle: "Open file with terminal Vim from the macOS Finder",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate assumenda, perspiciatis nostrum perferendis beatae maiores non quas officia accusamus quasi soluta temporibus quae sequi id quaerat nobis ullam officiis excepturi.",
          time: "September 13, 2019"
        },
      ]
    };
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
<style  scoped>
.body {
  width: 92%;
  margin: 0 4%;
  /* height: 100%; */
  /* background: gold; */
}
</style>