<template>
  <div class="body">
    <audio
      preload
      muted
      loop
      src="https://m7.music.126.net/20191012191036/7b85b322c7e39024b3d1a9fe0ef494cd/ymusic/5258/0f5f/015c/e23eb784398544031837660e6d233a6e.mp3"
      ref="audio"
      id="audio"
    >您的浏览器不支持 audio 与元素。</audio>
    <div class="player-btn" @click="playControl">
      <img v-if="isplay===false" src="../assets/play.png" alt />
      <img v-else src="../assets/pause.png" alt />
    </div>
    <div class="player-body">
      <div class="msg">
        <p>💕{{name}}</p>
        <p>🎙{{singer}}</p>
        <p>播放进度：{{cur}}%</p>
      </div>
      <div class="controller">
        <ProgressBar
          :init="init"
          @valChange="valChange"
          @moveDown="moveDown"
          :cur="currentTime"
          @moving="moving"
        ></ProgressBar>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import ProgressBar from "./ProgressBar";
export default {
  //import引入的组件需要注入到对象中才能使用

  components: {
    ProgressBar
  },
  data() {
    //这里存放数据
    return {
      // 歌曲属性
      time: null,
      name: "起风了",
      singer: "吴青峰",
      //播放进度值（百分比值）
      init: 0, //初始值
      cur: 0, //双向绑定
      currentTime: 0, //当前值
      //false表示当前没播放
      isplay: false,
      //判断滑动是否结束
      isMoveDown: null,
      //定时器
      timer: null,
      //是否正在拖动
      isMoving: null
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
    //确保移动停止再修改当前播放节点
    isMoveDown() {
      if (this.isMoveDown) {
        this.toTarget();
        this.isMoveDown = null;
      }
    },
    //确保移动过程中停止进度条自动滚动事件
    isMoving() {
      if (this.isMoving) {
        this.stopFllow();
      }
      this.isMoving = null;
    },
    //进度条的进度改变后
    async cur(val) {
      this.currentTime = await val;
      if (this.isplay === false) {
        audio.play();
        this.isplay = true;
        //获取歌曲的完整长度
        this.time = Math.floor(audio.duration);
        //判断播放的起始位置
        audio.currentTime = (Math.floor(this.cur) / 100) * this.time;
        this.follow();
      }
    }
  },
  //方法集合
  methods: {
    //双向绑定props
    valChange(val) {
      this.cur = val;
    },
    //播放or暂停
    playControl() {
      let audio = this.$refs.audio;
      //false表示当前没播放
      if (this.isplay === false) {
        audio.play();
        this.isplay = true;
        //获取歌曲的完整长度
        this.time = Math.floor(audio.duration);
        //判断播放的起始位置
        audio.currentTime = (Math.floor(this.cur) / 100) * this.time;
        this.follow();
      } else {
        audio.pause();
        this.isplay = false;
        this.stopFllow();
      }
    },
    //到指定时间开始播放
    async toTarget() {
      await this.stopFllow();
      let audio = this.$refs.audio;
      audio.currentTime = (Math.floor(this.cur) / 100) * this.time;
      this.follow();
    },
    //判断进度条拖动是否停止
    moveDown(data) {
      this.isMoveDown = data;
    },
    //判断进度条拖动是否正在拖动
    moving(data) {
      this.isMoving = data;
    },
    //进度条自动滚动
    follow() {
      let _this = this;
      let curTime;
      let audio = this.$refs.audio;
      if (this.timer == null) {
        this.timer = setInterval(function() {
          curTime = audio.currentTime; //获取当前的播放时间
          _this.currentTime = Math.floor((curTime / audio.duration) * 100);
        }, 0);
      }
    },
    //进度条滚动停止
    stopFllow() {
      clearInterval(this.timer);
      this.timer = null;
    }
  },
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
  width: 46rem;
  height: 8rem;
  position: absolute;
  top: 10rem;
  right: 20%;
  user-select: none;
  box-shadow: 0.2rem 0.2rem 0.8rem #888;
  background: #ffffff;
}
.player-btn {
  float: left;
  width: 20%;
  height: 100%;
  background: transparent;
  box-shadow: 0.4rem 0 0.8rem #888;
}
.player-btn img {
  max-width: 40%;
  position: relative;
  margin: 0 auto;
  top: 50%;
  transform: translateY(-50%);
}
.player-body {
  display: inline-block;
  width: 80%;
  height: 100%;
}
.msg {
  width: 90%;
  height: 76%;
  margin: 0 5%;
  text-align: center;
  display: inline-block;
}
.msg > p {
  font-size: 1.2rem;
  margin-top: 0.4rem;
}
.controller {
  display: inline-block;
  width: 100%;
  height: 24%;
}
@media screen and (max-width: 1000px) {
  .body {
    display: none;
  }
}
</style>