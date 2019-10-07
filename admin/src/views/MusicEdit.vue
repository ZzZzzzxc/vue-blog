<template>
  <div class="about">
    <h1>{{id ? '编辑' : '新建'}}Tag</h1>
    <el-form label-width="120px" @submit.native.prevent="save">
        <el-form-item label="id">
        <el-input v-model="model.id"></el-input>
      </el-form-item>
      <el-form-item label="歌名">
        <el-input v-model="model.song"></el-input>
      </el-form-item>
      <el-form-item label="歌手">
        <el-input v-model="model.singer"></el-input>
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
      model: {
        id:'',
        song:'',
        singer:''
      }
    };
  },
  computed:{
  },
  methods: {
    async save() {
      let res;
      if (this.id) {
        res = await this.$http.put(`rest/musics/${this.id}`, this.model);
      } else {
        res = await this.$http.post("rest/musics", this.model);
      }
      this.$router.push("/musics/list");
      this.$message({
        type: "success",
        message: "保存成功"
      });
    },
    async fetch() {
      const res = await this.$http.get(`rest/musics/${this.id}`);
      this.model = res.data;
    },
  },
  created() {
    
    this.id && this.fetch();
  }
};
</script>