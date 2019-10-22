<!--  -->
<template>
  <div class="body">
    <div class="container">
      <div class="row clearfloat">
        <div class="row-3">
          <div class="link">
            <p>放一些大佬的Blog（以下排名不分先后）</p>
            <ul>
              <li>
                <a href="https://huangxuan.me/" target="blank1">黄玄的博客</a>
              </li>
              <li>
                <a href="https://xin-tan.com/" target="blank2">心谭博客</a>
              </li>
              <li>
                <a href="https://ainyi.com/" target="blank3">Krryblog-你的美好我都记得</a>
              </li>
              <li>
                <a href="http://www.ruanyifeng.com/blog/" target="blank4">阮一峰的网络日志</a>
              </li>
              <li>
                <a href="https://biaochenxuying.cn/" target="blank5">夜尽天明的个人博客网站</a>
              </li>
            </ul>
            <p>我以前的hexo小博客</p>
            <ul>
              <li>
                <a href="https://zzzzzzxc.github.io/" target="view_window">ZzZzzzxc的秋秋空间</a>
              </li>
            </ul>
          </div>
          <Gitment/>
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
import Gitment from '../components/Gitment'
import TagList from "./TagList";
import PersonalCard from "../components/PersonalCard";
export default {
  //import引入的组件需要注入到对象中才能使用

  components: {
    TagList,
    PersonalCard,
    Gitment
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
p {
  font-size: 2rem;
  margin: 2rem 0;
}
ul {
  font-size: 2rem;
  margin-top: 4rem;
}
li {
  margin: 2rem;
}
a {
  color: #bfbfbf;
}
a:hover{
    text-decoration: underline;
}
</style>