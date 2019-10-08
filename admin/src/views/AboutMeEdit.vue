<template>
  <div class="about">
    <h1>{{id ? '编辑' : '新建'}}about</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
      <el-form-item label="图标">
        <el-upload
          class="el-upload el-upload--picture-card"
          :action='uploadUrl'
          :header="getAuthHeaders()"
          :show-file-list="false"
          :on-success="afterUpload"
        >
          <img v-if="model.avatar" :src="model.avatar" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
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
  props: {
    id: {}
  },
  data() {
    return {
      model: {}
    };
  },
  computed: {},
  methods: {
    async save() {
      let res;
      if (this.id) {
        res = await this.$http.put(`rest/abouts/${this.id}`, this.model);
      } else {
        res = await this.$http.post("rest/abouts", this.model);
      }
      this.$router.push("/abouts/list");
      this.$message({
        type: "success",
        message: "保存成功"
      });
    },
    async fetch() {
      const res = await this.$http.get(`rest/abouts/${this.id}`);
      this.model = res.data;
    },
    afterUpload(res) {
      //显式赋值
      this.$set(this.model, "avatar", res.url);
    }
  },
  created() {
    this.id && this.fetch();
  }
};
</script>
<style scoped>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  /* width: 178px; */
  height: 178px;
  display: block;
}
.el-upload--picture-card {
    background-color: #fbfdff;
    border: 1px dashed #c0ccda;
    border-radius: 6px;
    box-sizing: border-box;
    width: 178px;
    height: 178px;
    cursor: pointer;
    line-height: 146px;
    vertical-align: top;
}
</style>