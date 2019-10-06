<!--  -->
<template>
  <div class>
    <div class="container" :class="this.show?'container':'container-unshow'">
      <div
        class="markdown-title"
        style="padding:4rem 0; margin:0 0 4rem 0; box-shadow: 0.2rem 0.2rem 0.8rem #888;text-align:center "
      >
        <p style="font-size:4rem;font-weight:bolder">{{model.title}}</p>
        <p style="font-size:3rem">{{model.subTitle}}</p>
        <p style="font-size:2rem">{{model.description}}</p>
        <p style="font-size:2rem">创作时间——{{model.createTime}}</p>
        <p style="font-size:2rem">最后编辑时间——{{model.lastEditTime}}</p>
      </div>
      <div class="markdown-body" v-html="model.contentHtml" />
    </div>
    <div class="show-btn" :class="this.show?'show-btn':'show-btn-unshow'" @click="isShow">{{word}}</div>
    <div class="catalog" :class="this.show?'catalog':'unshow'">
      <div class="title">目录</div>
      <CatalogTree :tree="tree" :rank="rank" />
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import catalog from "../assets/power/catalog";
import CatalogTree from "../components/CatalogTree";
import "../assets/css/markdown.css";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    CatalogTree
  },
  props: {
    id: {}
  },
  data() {
    //这里存放数据
    return {
      model: {
        context: "",
        createTime: "",
        description: "",
        lastEditTime: "",
        subTitle: "",
        title: "",
        contentHtml: ""
      },
      tree: [],
      show: true,
      rank: 0
    };
  },
  //监听属性 类似于data概念
  computed: {
    prop() {
      let data = {
        subfield: false, // 单双栏模式
        defaultOpen: "preview", //edit： 默认展示编辑区域 ， preview： 默认展示预览区域
        editable: false,
        toolbarsFlag: false,
        scrollStyle: true
      };
      return data;
    },
    word() {
      return this.show ? "close" : "open";
    }
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    async fetch() {
      const res = await this.$http.get(`articles/${this.id}`);
      this.model = res.data;
      this.$nextTick(function() {
        this.tree = catalog.catalog();
      });
    },
    isShow() {
      this.show = !this.show;
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.fetch();
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
.container {
  width: 70%;
  /* margin: 0 15%; */
  margin: 0 0 0 25%;
  padding: 6rem 0;
  transition: 0.2s;
}
.container-unshow {
  width: 70%;
  margin: 0 15%;
  padding: 6rem 0;
}
.catalog {
  background: rgba(121, 109, 255, 1);
  display: block;
  position: fixed;
  top: 0rem;
  font-size: 1.2rem;
  width: 20%;
  overflow: hidden;
  height: 100%;
  overflow-y: auto;
  color: white;
  /* left: -20%; */
  left: 0;
  transition: 0.2s;
}
.unshow {
  left: -20%;
  /* display: none; */
}
.show-btn {
  position: fixed;
  top: 90%;
  left: 20%;
  height: 4rem;
  background: rgba(1, 1, 1, 0.1);
  z-index: 1;
  transition: 0.2s;
  line-height: 4rem;
  padding: 0 2rem;
  font-size: 1.6rem;
}
.show-btn-unshow {
  left: 0;
}
.title {
  font-size: 1.8rem;
  font-weight: bolder;
  height: 4rem;
  line-height: 4rem;
}
@media screen and (max-width: 768px) {
  .container {
    width: 90%;
    margin: 0 5%;
    padding: 2rem 0;
  }
}
@media screen and (max-width: 799px) {
  /* .markdown-body {
    font-size: 1rem
  } */

  .catalog {
    display: none;
  }
  .show-btn {
    display: none;
  }
}
.catalog::-webkit-scrollbar {
  width: 1.6rem;
  height: 0.6rem;
  background: transparent;
}

.catalog::-webkit-scrollbar-thumb {
  background: transparent;
  border-radius: 0.4rem;
}

.catalog:hover::-webkit-scrollbar-thumb {
  background: hsla(0, 0%, 53%, 0.4);
}

.catalog:hover::-webkit-scrollbar-track {
  background: hsla(0, 0%, 53%, 0.1);
}
</style>