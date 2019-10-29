<!--  -->
<template>
  <div class="tag-card-body">
    <TagCard v-for="(value,key) in tagList" :key="key" :tagList="tagList" :index="key" ref="list" />
    <div class="footer line"></div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import TagCard from "../components/TagCard";
import { getTagsList } from "../service";
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
    colorful() {
      let ele = this.$refs.list;
      for (let i = 0; i < ele.length; i++) {
        if (i < 1) {
          ele[i].$el.style.background = "rgba(255, 134, 50, .8)";
        }
        if (i >= 1) {
          ele[i].$el.style.background = "rgba(47, 147, 180, 1)";
        }
        if (i >= 2) {
          ele[i].$el.style.background = "rgba(47, 147, 180, 0.7)";
        }
        if (i > 3) {
          ele[i].$el.style.background = "rgba(187, 187, 238, 0.9)";
        }
      }
      //   ele[0].style.background = 'red'
      //   console.log(ele[0].$el.style);
    },
    // async fetchTags() {
    //   const res = await this.$http.get("tags/list");
    //   this.tagList = res.data;
    //   this.tagSort();
    // }
    async fetchTags() {
      this.tagList = await getTagsList();
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
  updated() {
    this.colorful();
  }, //生命周期 - 更新之后
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
}
.tag-card-body /deep/ .tag-body {
  color: white;
  border: none;
  font-weight: bold;
}

.tag-card-body /deep/ .tag-body:hover {
  box-shadow: 0.2rem 0.2rem 0.8rem #ac4a939c;
}
.footer {
  margin-top: 2rem;
  position: relative;
}
</style>