<!--  -->
<template>
  <div class="tag-card-body">
    <div class="title">标签云<img src="../assets/cloud.png" style="display:inline-block;max-width:2.6rem;vertical-align:middle" ></div>
    <TagCard v-for="(value,key) in tagList" :key="key" :tagList="tagList" :index="key" />
    <div class="footer line"></div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import TagCard from "../components/TagCard";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    TagCard
  },
  data() {
    //这里存放数据
    return {
      tagList: [
        {
          name: "",
          num: Number,
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
    tagSort() {
      this.tagList = this.tagList.sort((l, r) => r.num - l.num);
    },
    async fetchTags() {
      const res = await this.$http.get("tags/list");
      this.tagList = res.data;
      this.tagSort();
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.fetchTags();
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
.tag-card-body {
  width: 98%;
  margin: 2rem 1%;
  /* background: blue; */
  padding: 3%;
  box-shadow: 0.5rem 0.5rem 1.8rem #888;
  /* transform: rotate(5deg) */
}

.title {
  height: 4rem;
  line-height: 4rem;
  text-align: center;
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0 auto;
}
.footer {
  margin-top: 2rem;
  position: relative;
}
</style>