<template>
  <div class="alert">
    <transition-group name = "fade">
    <div class="alert-main" v-for="item in notices" :key="item.name">
      <div class="alert-content">{{ item.content }}</div>
    </div>
    </transition-group>
  </div>
</template>
<script>
let seed = 0;

function getUuid() {
  return "alert_" + seed++;
}

export default {
  data() {
    return {
      notices: []
    };
  },
  methods: {
    add(notice) {
      const name = getUuid();
      let _notice = Object.assign(
        {
          name: name
        },
        notice
      );
      if (this.notices.length > 3) {
        this.notices.shift();
      }
      this.notices.push(_notice);

      // 定时移除，单位：秒
      const duration = notice.duration;
      setTimeout(() => {
        this.remove(name);
      }, duration * 1000);
    },
    remove(name) {
      const notices = this.notices;
      for (let i = 0; i < notices.length; i++) {
        if (notices[i].name === name) {
          this.notices.splice(i, 1);
          break;
        }
      }
    }
  }
};
</script>
<style scoped>
.alert {
  position: fixed;
  width: 100%;
  top: 3rem;
  left: 0;
  text-align: center;
  pointer-events: none;
}
.alert-content {
  display: inline-block;
  font-size: 1.6rem;
  padding: 0.6rem 1.2rem;
  background: #fff;
  border-radius: 0.2rem;
  box-shadow: 0 0.1rem 0.5rem rgba(0, 0, 0, 0.2);
  margin-bottom: 0.6rem;
}
.fade-enter-active, .fade-leave-active {
     transition: all .3s ease;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
    transform: translateX(-2rem);
}
 .fade-leave-to {
    opacity: 0;
    transform: translateX(-2rem);
}
</style>