<!--  -->
<template>
  <div class="page-body" v-if="$route.path==='/'">
    <div class="newer" @click="reduce" :class="{'hide':cur==1}">前一页</div>
    <ul>
      <li
        v-for="(value,key) in list"
        :key="key"
        :class="{'active':cur==list[key]}"
        @click="toPage(list[key])"
      >{{list[key]}}</li>
    </ul>
    <div class="older" @click="add" :class="{'hide':cur==pags}">下一页</div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    //总条数
    sum: Number,
    //每页条数
    num: Number
  },
  data() {
    //这里存放数据
    return {
      cur: 0,
      pags: Number,
      pagegroup: 5
    };
  },
  //监听属性 类似于data概念
  computed: {
    list() {
      let c = this.cur;
      let t = Math.ceil(this.sum / this.num);
      let arr = [];
      if (t < 2) {
        return [1];
      }
      if (t <= 6) {
        for (let i = 1; i <= t; i++) {
          arr.push(i);
        }
        return arr;
      }
      if (c < 3) return [1, 2, 3, "...", t];
      if (c >= 3 && c <= t - 2) return [1, "...", c - 1, c, c + 1, "...", t];
      if (c > t - 2) return [1, "...", t - 2, t - 1, t];
    }
  },
  //监控data中的数据变化
  watch: {
    cur() {
      this.$emit("curChange", this.cur);
    }
  },
  //方法集合
  methods: {
    //计算页数
    getPags() {
      this.pags = Math.ceil(this.sum / this.num);
    },
    //切换到第几页
    toPage(index) {
      if (index != "...") {
        this.cur = index;
      } else {
        this.$TOAST("hi");
      }
    },
    //页码加一
    add() {
      if (this.cur < this.pags) {
        this.cur++;
      } else {
        this.$TOAST("已经是最后一页了");
      }
    },
    //页码减一
    reduce() {
      if (this.cur > 1) {
        this.cur--;
      } else {
        this.$TOAST("已经是第一页了");
      }
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.getPags();
    this.cur = 1;
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
.page-body {
  width: 92%;
  margin: 2% 4%;
  height: 4rem;
  line-height: 4rem;
  display: flex;
  justify-content: space-between;
  text-align: center;
  box-shadow: 0.5rem 0.5rem 1.8rem #888;
  font-size: 1.6rem;
}
.newer {
  width: 20%;
  transition: 0.2s;
}
.older {
  width: 20%;
  transition: 0.2s;
}
ul {
  flex-grow: 1;
  display: flex;
  justify-content: center;
}
li {
  width: 10%;
  transition: 0.2s;
}
.active {
  background: rgb(65, 184, 131);
  color: white;
}
.active:hover {
  color: white;
}
li:hover {
  color: rgb(65, 184, 131);
}
.newer:hover {
  color: rgb(65, 184, 131);
}
.older:hover {
  color: rgb(65, 184, 131);
}
.hide {
  color: #888;
}
.hide:hover {
  color: #888;
  text-decoration: line-through;
}
</style>