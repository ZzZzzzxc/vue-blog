<!--  -->
<template>
  <div class="body">
    <div class="container">
      <div class="row clearfloat">
        <div class="row-3">
          <div class="todo">
            <ol>
              <h2>目前最最最基础的功能基本完成，不过缺陷还很多，慢慢整</h2>
              <li>
                <s>根据标签检索文章</s>
              </li>
              <li><s>添加打字特效</s></li>
              <li><s>初步整容</s></li>
              <li><s>公告栏</s></li>
              <li><s>回到顶部</s></li>
              <li><s>markdown编辑器的图片上传</s></li>
              <li>主题颜色切换</li>
              <li>404</li>
              <li>路由配置</li>
              <li>axios封装</li>
              <li>整个容</li>
              <li>挂服务器上玩</li>
              <li>添加文章分页功能</li>
              <li><s>添加文章目录功能</s>做的有点辣眼睛</li>
              <li>文章页添加时间轴</li>
              <li>添加搜索功能</li>
              <li>添加评论功能</li>
              <li>添加音乐播放器</li>
              <li>继续整容</li>
              <li>封装代码</li>
              <li>优化下性能</li>
            </ol>
          </div>
        </div>
        <div class="row-1">
          <TagList />
          <PersonalCard />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import TagList from "./TagList";
import PersonalCard from "../components/PersonalCard";
export default {
  //import引入的组件需要注入到对象中才能使用

  components: {
    TagList,
    PersonalCard
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
<style  scoped>
.body {
  /* height: 1000px; */
}
.row {
  width: 84%;
  margin: 0 8%;
  height: 100%;
}
.row-3 {
  width: 72%;
  /* background: red; */
  /* height: 1000px; */
  margin: 0 1.5%;
  float: left;
}
.row-1 {
  display: inline-block;
  width: 25%;
  /* background: green; */
  /* height: 1000px; */
}
@media screen and (max-width: 768px) {
  .row-1 {
    display: none;
  }
  .row-3 {
    width: 98%;
    margin: 0 1%;
    float: left;
  }
  .row {
    width: 94%;
    margin: 0 3%;
    height: 100%;
  }
}
ol {
  font-size: 2rem;
  margin-top: 4rem;
}
li {
  margin: 2rem;
}
</style>