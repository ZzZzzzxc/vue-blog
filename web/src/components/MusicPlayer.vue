<template>
  <div class="body">
    <div class="player" @click="isPaused()" title="点击播放/暂停">
      🎶
      <audio preload muted loop :src="url" id="media">您的浏览器不支持 audio 与元素。</audio>
    </div>
    <!-- <div class="msg">{{singer}}=={{song}}</div> -->
    <!-- 歌单 -->
    <ul id="list" :class="{'show':isShow,'unshow':!isShow}">
      <li
        v-for="(v,k) in musicList"
        :key="k"
        @click="getMusic(musicList[k].id)"
        class="item"
        :class="{'active':cur ===k}"
      >{{musicList[k].song}}💕{{musicList[k].singer}}</li>
    </ul>
    <div class="btn" @click="isShow?isShow=!isShow:isShow=!isShow">{{word}}</div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
let isRoutate;
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      isShow: false,
      music: [],
      singer: "",
      song: "",
      url: "",
      deg: 0,
      //true开始
      paused: false,
      musicList: [
        {
          singer: "",
          song: "",
          id: ""
        }
      ],
      cur: ""
    };
  },
  //监听属性 类似于data概念
  computed: {
    word() {
      if (this.isShow) {
        return "关闭歌单";
      } else {
        return "显示歌单";
      }
    }
  },
  //监控data中的数据变化
  watch: {
    paused(value) {
      if (value) {
        isRoutate = setInterval(this.rotate, 20);
      } else {
        clearInterval(isRoutate);
      }
    }
  },
  //方法集合
  methods: {
    async getMusic(id) {
      //get数据
      const res = await this.$http.get(
        `https://api.imjad.cn/cloudmusic/?type=song&id=` + id + `&br=320000`
      );
      this.music = res.data;
      this.url = this.music.data[0].url;
      //根据id和歌单进行匹配,渲染出歌手和歌曲
      let index;
      for (let i = 0; i < this.musicList.length; i++) {
        if (this.musicList[i].id === id) {
          index = i;
          break;
        }
      }
      this.singer = this.musicList[index].singer;
      this.song = this.musicList[index].song;
      this.cur = index;
      //选择播放其他歌曲?reload():isPaused()
      this.$nextTick(function() {
        this.reload();
        // this.isPaused()
      });
    },

    async fetchList() {
      const res = await this.$http.get("musics/list");
      this.musicList = res.data;
    },
    isPaused() {
      let audio = document.getElementById("media");
      if (audio.paused) {
        //判断当前的状态是否为暂停，若是则点击播放，否则暂停
        audio.play();
        this.paused = true;
      } else {
        audio.pause();
        this.paused = false;
      }
    },
    reload() {
      let audio = document.getElementById("media");
      audio.play();
      this.paused = true;
      this.deg = 0;
    },
    rotate() {
      let player = document.getElementsByClassName("player")[0];
      player.style.transform = "rotate(" + this.deg + "deg)";
      this.deg += 1;
      if (this.deg === 360) {
        this.deg = 0;
      }
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.fetchList();
    this.getMusic(this.musicList[0].id);
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
.player {
  position: fixed;
  top: 5rem;
  right: 0.4rem;
  width: 6rem;
  height: 6rem;
  background: wheat;
  text-align: center;
  line-height: 6rem;
  font-size: 2rem;
  border-radius: 50%;
  user-select: none;
}
.show {
  right: 0;
}
.unshow {
  right: -90%;
}
ul {
  position: fixed;
  top: 15rem;
  right: 0;
  background: wheat;
  user-select: none;
  box-shadow: 0.2rem 0.2rem 0.8rem #888;
  transition: 0.2s;
}
li {
  font-size: 1.2rem;
  line-height: 1.5;
  margin: 1rem;
  font-weight: bolder;
  transition: 0.2s;
}
.btn {
  position: fixed;
  top: 12rem;
  right: 0;
  background: wheat;
  text-align: center;
  font-size: 1.2rem;
  line-height: 1.5;
  padding: 0.7rem 0.8rem;
  user-select: none;
}
@media screen and (max-width: 1000px) {
  .body {
    display: none;
  }
}
.msg {
  position: fixed;
  top: 8rem;
  right: 10rem;
  background: white;
  user-select: none;
  box-shadow: 0.2rem 0.2rem 0.8rem #888;
  padding: 0.6rem;
}
.right {
  text-align: right;
}
.item {
  opacity: 0.4;
}
.active {
  opacity: 1;
}
</style>