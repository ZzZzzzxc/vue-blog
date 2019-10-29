<template>
  <div id="body" @mouseenter="show" @mouseleave="hide()">
    <audio preload muted loop :src="url" ref="audio" id="audio">您的浏览器不支持 audio 与元素。</audio>
    <div class="player-btn" @click="playControl" v-if="isHide===false">
      <img v-if="isHide===false&&isplay===false" src="../../assets/play.png" alt />
      <img v-if="isHide===false&&isplay===true" src="../../assets/pause.png" alt />
      <img v-if="isHide===true" src="../../assets/backward.png" title="显示播放器" alt />
    </div>
    <div class="show-btn" @click="show" v-if="isHide===true">
      <img src="../../assets/backward.png" title="显示播放器" alt />
    </div>

    <div class="player-body">
      <div class="msg" ref="msg">
        <p :key="1">💕{{song}}</p>
        <p :key="2">🎙{{singer}}</p>
        <p :key="3">播放进度：{{cur}}%</p>
      </div>

      <div class="controller">
        <div class="progess">
          <ProgressBar
            :init="init"
            @valChange="valChange"
            @moveDown="moveDown"
            :cur="currentTime"
            @moving="moving"
          ></ProgressBar>
        </div>
        <div class="volume" @click="isTrunOn">
          <img v-if="isVolume===true" src="../../assets/quieter.png" alt title="静音" />
          <img v-else src="../../assets/turn_off.png" title="开启声音" alt />
        </div>
        <div class="next" @click="next">
          <img src="../../assets/next.png" title="下一首" alt />
        </div>
        <div class="list">
          <img src="../../assets/quarter_note.png" title="歌单" alt />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import ProgressBar from "./ProgressBar";
import { getMusicsList, getMusic } from "../../service";
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
      url: "https://vue-blog-1259658719.cos.ap-chengdu.myqcloud.com/oulong.mp3",
      song: "先听听这首吧，正在努力搜寻歌曲。。。",
      singer: "api是挂了吗/(ㄒoㄒ)/~~",
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
      isMoving: null,
      //是否静音
      isVolume: true,
      //是否隐藏播放器
      isHide: false,
      //请求的数据
      musicList: [],
      //当前的歌曲序号
      curIndex: 0
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
        this.getTime();
        //判断播放的起始位置
        audio.currentTime = (Math.floor(this.cur) / 100) * this.time;
        this.follow();
      }
    },
    //切歌
    async curIndex(val) {
      let audio = this.$refs.audio;
      await this.getMusic(val);
      await audio.play();
      this.currentTime = 0;
      this.isplay = true;
      this.getTime();
    },
    url(val) {
      // console.log(val);
    }
  },
  //方法集合
  methods: {
    //双向绑定props
    valChange(val) {
      this.cur = val;
      if (val == 99) {
        this.next();
      }
    },
    //播放or暂停
    playControl() {
      let audio = this.$refs.audio;
      //false表示当前没播放
      if (this.isplay === false) {
        audio.play();
        this.isplay = true;
        //获取歌曲的完整长度
        this.getTime();
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
    },
    //静音
    isTrunOn() {
      let audio = this.$refs.audio;
      //false表示静音
      if (this.isVolume) {
        (audio.volume = 0), (this.isVolume = false);
        this.$Alert.info({
          content: "静音"
        });
      } else {
        (audio.volume = 1), (this.isVolume = true);
        this.$Alert.info({
          content: "开启声音"
        });
      }
    },
    //隐藏播放器
    hide() {
      document.getElementById("body").style.right = "-40rem";
      this.isHide = true;
    },
    //显示播放器
    show() {
      document.getElementById("body").style.right = "0";
      this.isHide = false;
    },
    //下一首
    next() {
      if (this.curIndex < this.musicList.length - 1) {
        this.curIndex++;
      } else {
        this.$Alert.info({
          content: "到底了，从头开始💤"
        });
        this.curIndex = 0;
      }
    },
    //请求
    // async getMusic(index) {
    //   let id = this.musicList[index].id;
    //   //get数据
    //   const res = await this.$http.get(
    //     `https://api.imjad.cn/cloudmusic/?type=song&id=` + id + `&br=320000`
    //   );
    //   this.url = await res.data.data[0].url;
    //   this.song = this.musicList[index].song;
    //   this.singer = this.musicList[index].singer;
    // },
    async getMusic(index) {
      let id = this.musicList[index].id;
      //get数据
      const res = await getMusic(id);
      this.url = await res.data[0].url;
      this.song = this.musicList[index].song;
      this.singer = this.musicList[index].singer;
    },
    // async fetchList() {
    //   const res = await this.$http.get("musics/list");
    //   this.musicList = res.data;
    //   this.$nextTick(function() {
    //     this.getMusic(0);
    //   });
    // },
    async fetchList() {
      const res = await getMusicsList();
      this.musicList = res;
      this.$nextTick(function() {
        this.getMusic(0);
      });
    },
    getTime() {
      let audio = this.$refs.audio;
      this.time = Math.floor(audio.duration);
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.fetchList();
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.hide();
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
#body {
  width: 46rem;
  height: 8rem;
  position: fixed;
  top: 6rem;
  /* right: -36rem; */
  right: 0;
  user-select: none;
  background: rgba(255, 255, 255, 0.8);
  transition: 0.8s;
}
#body:hover {
  background: rgba(255, 255, 255, 1);
}
.player-btn {
  float: left;
  width: 20%;
  height: 100%;
  background-color: rgb(65, 184, 131);
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
  height: 80%;
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
  height: 20%;
  width: 100%;
  padding: 0 10%;
}
.progess {
  display: inline-block;
  width: 70%;
  height: 100%;
}
.list {
  display: inline-block;
  height: 100%;
  width: 10%;
}
.list img {
  max-width: 100%;
  position: relative;
  margin: 0 auto;
  top: 50%;
  transform: translateY(-50%);
}
.list img:hover {
  min-width: 110%;
}
.next {
  display: inline-block;
  height: 100%;
  width: 10%;
}
.next img {
  max-width: 100%;
  position: relative;
  margin: 0 auto;
  top: 50%;
  transform: translateY(-50%);
}
.next img:hover {
  min-width: 110%;
}
.volume {
  display: inline-block;
  height: 100%;
  width: 10%;
}
.volume img {
  max-width: 100%;
  position: relative;
  margin: 0 auto;
  top: 50%;
  transform: translateY(-50%);
}
.volume img:hover {
  min-width: 110%;
}
.show-btn {
  float: left;
  width: 20%;
  height: 100%;
  background-color: rgb(65, 184, 131);
}
.show-btn img {
  max-width: 40%;
  position: relative;
  margin: 0 auto;
  top: 50%;
  transform: translateY(-50%);
}

@media screen and (max-width: 1000px) {
  #body {
    display: none;
  }
}
</style>