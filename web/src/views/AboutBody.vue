<!--  -->
<template>
<div class='body'>
    <div class="container">
        <div class="row clearfloat">
            <div class="row-3">
                <About/>
            </div>
            <div class="row-1">
                <TagList/>
                <PersonalCard/>
            </div>
        </div>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import TagList from './TagList'
import PersonalCard from '../components/PersonalCard'
import About from './About'
export default {
//import引入的组件需要注入到对象中才能使用

components: {
    TagList,
    PersonalCard,
    About
},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

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
.body{
    /* height: 1000px; */
}
.row{
    width: 84%;
    margin:0 8%;
    height: 100%;
}
.row-3{
    width: 72%;
    /* background: red; */
    /* height: 1000px; */
    margin: 0 1.5%;
    float: left;
}
.row-1{
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
  .row{
    width: 94%;
    margin:0 3%;
    height: 100%;
}
}
</style>