<template>
  <div>
    <h1>分类列表</h1>
    <el-table :data="model" stripe>
      <el-table-column prop="id" label="id" width="240"></el-table-column>
      <el-table-column prop="song" label="歌名"></el-table-column>
      <el-table-column prop="singer" label="歌手"></el-table-column>

      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click="$router.push(`/musics/edit/${scope.row._id}`)"
          >编辑</el-button>
          <el-button type="text" size="small" @click="remove(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: [
        {
          id: "",
          song: "",
          singer: ""
        }
      ]
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get("rest/musics");
      this.model = res.data;
    },
    async remove(row) {
      this.$confirm(`此操作将永久删除该分类"${row.name}"`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        const res = await this.$http.delete(`rest/musics/${row._id}`);
        this.$message({
          type: "success",
          message: "删除成功!"
        });
        this.fetch();
      });
    }
  },
  created() {
    this.fetch();
  }
};
</script>