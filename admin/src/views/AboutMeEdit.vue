<template>
  <div class="about">
    <h1>About Me</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="描述">
        <el-input v-model="model.description"></el-input>
      </el-form-item>
      <el-form-item label="内容">
        <el-input v-model="model.context"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {
        avatar: "",
        name: "",
        description: "",
        context: ""
      }
    };
  },
  computed: {},
  methods: {
    async save() {
      let res;

      res = await this.$http.post("rest/messages", this.model);
      this.$message({
        type: "success",
        message: "保存成功"
      });
    },
    async fetch() {
      const res = await this.$http.get(`rest/messages`);
      this.model = res.data;
    }
  },
  created() {
    this.fetch();
  }
};
</script>