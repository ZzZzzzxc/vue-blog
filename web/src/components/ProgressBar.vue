<!--  -->
<template>
  <div class="bar-body" ref="process">
    <div class="tunk">
      <!-- 进度条 -->
      <div class="process" :style="{width}"></div>
      <!-- 拖拽球 -->
      <div class="contact" ref="contact" :style="{'left':left}"></div>
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
    init: Number, //当前百分比
    cur: Number //控制进度条自动滚动
  },
  data() {
    //这里存放数据
    return {
      min: 0,
      max: 100,
      process: null, //滚动条DOM元素
      contact: null, //拖拽DOM元素
      value: this.init, //当前百分比
      preX: null //存储拖拽球的起点
    };
  },
  //监听属性 类似于data概念
  computed: {
    // 设置一个百分比，提供计算slider进度宽度和trunk的left值
    // 对应公式为  当前值-最小值/最大值-最小值 = slider进度width / slider总width
    // trunk left =  slider进度width + trunk宽度/2
    scale() {
      return (this.value - this.min) / (this.max - this.min);
    },
    //进度条宽度
    width() {
      if (this.process) {
        return this.process.offsetWidth * this.scale + "px";
      } else {
        return 0;
      }
    },
    //拖拽球相对与起点的偏移量
    left() {
      if (this.process) {
        return (
          this.process.offsetWidth * this.scale -
          this.contact.offsetWidth / 2 +
          "px"
        );
      } else {
        return 0;
      }
    }
  },
  //监控data中的数据变化
  watch: {
    //向父组件传递当前的进度
    value(val) {
      this.$emit("valChange", val);
    },
    //控制进度条自动滚动
    cur(val) {
      this.value = val;
    }
  },
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    //   通过三个鼠标事件：点击、移动、抬起，只要计算出当前位置即可
    this.process = this.$refs.process;
    this.contact = this.$refs.contact;
    let _this = this;
    this.preX = this.contact.getBoundingClientRect().x;
    this.process.onmousedown = function(e) {
      let preX = parseInt(_this.preX);
      // console.log('小球位置'+preX)
      let disX = parseInt(e.clientX);
      // console.log('点击位置'+disX)
      let newWidth = disX - preX < 0 ? preX - disX : disX - preX;
      let scale = newWidth / _this.process.offsetWidth;
      _this.value = Math.ceil((_this.max - _this.min) * scale + _this.min);
      _this.value = Math.max(_this.value, _this.min);
      _this.value = Math.min(_this.value, _this.max);
      _this.$emit("moveDown", true);
    };
    //触点小球的拖拽
    //鼠标点击阶段
    this.contact.onmousedown = function(e) {
      _this.$emit("moving", true);
      let width = parseInt(_this.width);
      // console.log("当前width=" + width);
      //X轴
      let disX = e.clientX;
      // console.log("X=" + disX);
      //鼠标移动阶段
      document.onmousemove = function(e) {
        // value, left, width
        // 当value变化的时候，会通过计算属性修改left，width
        // 拖拽的时候获取的新width
        let newWidth = e.clientX - disX + width;
        // console.log("新width=" + newWidth);
        // 拖拽的时候得到新的百分比
        let scale = newWidth / _this.process.offsetWidth;
        // console.log("新的百分比:" + scale);
        _this.value = Math.ceil((_this.max - _this.min) * scale + _this.min);
        _this.value = Math.max(_this.value, _this.min);
        _this.value = Math.min(_this.value, _this.max);

        _this.$emit("moving", true);
      };
      //鼠标离开阶段
      document.onmouseup = function() {
        document.onmousemove = document.onmouseup = null;
        _this.$emit("moveDown", true);
        _this.$emit("moving", null);
      };
      return false;
    };
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
.bar-body {
  width: 90%;
  height: 100%;
  /* margin: 0 5%; */
}
.tunk {
  position: relative;
  height: 40%;
  top: 30%;
  background: #dadada;
}
.process {
  position: absolute;
  left: 0;
  /* width: 100%; */
  height: 100%;
  /* top: 30%; */
  background: rgb(65, 184, 131);
}
.contact {
  position: absolute;
  /* left: 10%; */
  width: 2rem;
  height: 2rem;
  line-height: 2rem;
  border-radius: 50%;
  background: #ffffff;
  cursor: pointer;
  top: -100%;
  border: 0.1rem solid rgb(65, 184, 131);
}
.contact:hover {
  background: rgb(65, 184, 131);
  box-shadow: 0.2rem 0.2rem 0.8rem #888;
}
</style>