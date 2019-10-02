<template>
  <div class="about">
    <h1>{{id ? '编辑' : '新建'}}文章</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="添加Tag">
        <el-select v-model="model.tags" placeholder="选择Tag" multiple>
          <el-option v-for="item in tagList" :key="item._id" :label="item.name" :value="item._id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="创作时间">
        <el-input v-model="model.createTime" :disabled="true"></el-input>
      </el-form-item>
      <el-form-item label="上次编辑时间" v-if="id">
        <el-input v-model="model.lastEditTime" :disabled="true"></el-input>
      </el-form-item>

      <el-form-item label="标题">
        <el-input v-model="model.title"></el-input>
      </el-form-item>
      <el-form-item label="描述">
        <el-input v-model="model.description"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <mavon-editor v-model="model.context" :toolbars="toolbars" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {}
  },
  components: {},
  data() {
    return {
      toolbars: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        mark: true, // 标记
        superscript: true, // 上角标
        quote: true, // 引用
        ol: true, // 有序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        help: true, // 帮助
        code: true, // code
        subfield: true, // 是否需要分栏
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        /* 1.3.5 */
        undo: true, // 上一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true // 导航目录
      },
      model: {
        tags: [],
        title: "",
        description: "",
        context: "",
        createTime: "",
        lastEditTime: "",
        old:[],
        new:[]
      },
      tagList: [
        {
          name: ""
        }
      ]
    };
  },
  computed: {},
  methods: {
    //获取日期与时间
    getDate() {
      let t = new Date().toLocaleString();
      this.id
        ? this.$set(this.model, "lastEditTime", t)
        : (this.model.createTime = t);
    },
    
    async save() {
      let res;
      this.$set(this.model, "lastEditTime", new Date().toLocaleString());
      this.model.new = this.model.tags;
      console.log(this.model)
      if (this.id) {
        res = await this.$http.put(`rest/articles/${this.id}`, this.model);
      } else {
        res = await this.$http.post("rest/articles", this.model);
      }
      this.$router.push("/articles/list");
      this.$message({
        type: "success",
        message: "保存成功"
      });
    },
    async fetch() {
      const res = await this.$http.get(`rest/articles/${this.id}`);
      this.model = res.data;
      this.model.old = res.data.tags
    },
    async fetchTags() {
      const res = await this.$http.get(`rest/tags`);
      this.tagList = res.data;
      // console.log(this.categories)
    }
  },
  created() {
    this.getDate();
    this.fetchTags();
    this.id && this.fetch();
  },
  destroyed() {
  }
};
</script>