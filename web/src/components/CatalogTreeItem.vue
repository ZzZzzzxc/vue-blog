<!--  -->
<template>
  <div class>
    <div v-for="(child,key) in item.children" :key="key">
      <span id="item" @click="scroll(key)" ref="item" :style="'padding-left:'+lev+'rem'">{{ child.tag }}{{ child.title }}</span>
      <CatalogTree :tree="child.children" v-if="child.children" :rank="lev" />
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import CatalogTree from "./CatalogTree";
export default {
  name: "CatalogTreeItem",
  props: {
    item: Object,
    rank: Number
  },
  //import引入的组件需要注入到对象中才能使用
  components: {
    CatalogTree
  },
  data() {
    //这里存放数据
    return {
      lev: Number
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    scroll(index) {
      // window.scroll(0, this.item.children[index].scrollTop);
      window.scrollTo({
        top: this.item.children[index].scrollTop,
        behavior: "smooth"
      });
      // console.log(this.$route);
    },
    level() {
      this.lev = this.rank;
      this.lev++;
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.level();
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
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
span {
  display: inline-block;
  width: 100%;
  padding: 0 2rem;
  height: 3rem;
  line-height: 3rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: bold;
  transition: 0.2s;
  user-select:none;
}
span:hover {
  background: rgba(50, 109, 255, 1);
  font-weight: bolder;
}
</style>