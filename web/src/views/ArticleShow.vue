<!--  -->
<template>
<div class=''>
    <div class="container">
        <mavon-editor
      class="md"
      :value="model.context"
      :subfield="prop.subfield"
      :defaultOpen="prop.defaultOpen"
      :toolbarsFlag="prop.toolbarsFlag"
      :editable="prop.editable"
      :scrollStyle="prop.scrollStyle"
    ></mavon-editor>
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
    id: {},
  },
data() {
//这里存放数据
return {
    model:{
        context:'',
        createTime:'',
        description:'',
        lastEditTime:'',
        subTitle:'',
        title:''
    },
    toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        mark: true, // 标记
        superscript: true, // 上角标
        quote: true, // 引用
        ol: true, // 有序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        help: true, // 帮助
        code: true, // code
        subfield: true, // 是否需要分栏
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        /* 1.3.5 */
        undo: true, // 上一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true // 导航目录
      },
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
    }
},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    async fetch() {
      const res = await this.$http.get(`articles/${this.id}`);
      this.model = res.data;
    },
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
    this.fetch(),
    console.log(this.model)
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
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style  scoped>
.container{
    width: 70%;
    margin: 0 15%;
}
@media screen and (max-width: 768px){
    .container{
        width: 90%;
        margin:0 5%;
    }
}
.md{
  display: block;
  max-width: 100%;
  min-height:25rem;
  min-width:25rem;
  font-size: 1.2rem;
}
</style>