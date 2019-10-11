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
      <el-form-item label="sub标题">
        <el-input v-model="model.subTitle"></el-input>
      </el-form-item>
      <el-form-item label="描述">
        <el-input v-model="model.description"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <mavon-editor
          ref="md"
          @imgAdd="$imgAdd"
          v-model="model.context"
          :toolbars="toolbars"
          @change="changeData"
          @save='download'
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
/* eslint-disable */
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
        strikethrough: true, // 中划线
        mark: true, // 标记
        superscript: true, // 上角标
        subscript: true, // 下角标
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        help: true, // 帮助
        code: true, // code
        subfield: true, // 是否需要分栏
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        save:true,// 保存（触发events中的save事件）
        htmlcode: true, // 展示html源码
        /* 1.3.5 */
        undo: true, // 上一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        /* 1.4.2 */
        navigation: true, // 导航目录
        
      },
      model: {
        tags: [],
        title: "",
        subTitle: "",
        description: "",
        context: "",
        createTime: "",
        lastEditTime: "",
        old: [],
        new: [],
        contentHtml: ""
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
    //MD转HTML
    changeData(value, render) {
      //markdown
      // console.log(value);
      //html
      // console.log(render);
      this.model.contentHtml = render;
    },
    //上传图片
    async $imgAdd(pos, $file) {
      // 第一步.将图片上传到服务器.
      let formdata = new FormData();
      formdata.append("file", $file);
      const res = await this.$http.post("upload", formdata);
      this.$refs.md.$img2Url(pos, res.data.url);
    },
    //编辑器保存文件到本地
    //value为md格式
    //render为html格式
    download(value, render){
      let text  = value;
      let MIME_TYPE = 'text/plain'
      window.URL = window.webkitURL||window.URL
      let bb = new Blob([text],{type:MIME_TYPE})
      let a = document.createElement('a')
      a.download = this.model.title+'.md';
      a.href = window.URL.createObjectURL(bb)
      a.textContent = 'Download_ready'
      a.dataset.download = [MIME_TYPE,a.download,a.href].join(':')
      a.click()
    },
    async save() {
      let res;
      this.$set(this.model, "lastEditTime", new Date().toLocaleString());
      this.model.new = this.model.tags;
      // console.log(this.model)
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
      this.model.old = res.data.tags;
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
  destroyed() {}
};
</script>