<!-- 创建了一个 Comment.vue 组件 -->
<template>
  <div id="comment-container"></div>
</template>

<script>
import Gitment from "gitment";
import "gitment/style/default.css";

export default {
  data() {
    return {
      width: ""
    };
  },
  created() {
    this.width = window.screen.availWidth;
  },
  mounted() {
    const gitment = new Gitment({
      id: this.$route.path, // optional
      owner: "ZzZzzzxc", // GitHub ID
      repo: "vue-blog", // Github 仓库名
      oauth: {
        client_id: "61beabcc6dc933535b69", // Your client ID
        client_secret: "240d317f5ba8f5b2e98aec3f3ef58b672281c30d" // Your client secret
      }
    });
    gitment.render("comment-container");
  }
};
</script>

<style  scoped>
#comment-container {
  background: #fff;
  padding: 20px;
}
@media screen  and (max-width:900px) {
    #comment-container{
        display: none
    }
}

</style>

