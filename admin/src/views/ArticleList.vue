<template>
  <div>
    <h1>文章列表</h1>
    <el-table :data="model" stripe>
      <el-table-column prop="_id" label="ID" width="240"></el-table-column>
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column prop="description" label="描述"></el-table-column>
      <el-table-column prop="createTime" label="创作时间"></el-table-column>
      <el-table-column prop="lastEditTime" label="上次编辑时间"></el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click="$router.push(`/articles/edit/${scope.row._id}`)"
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
          _id: "",
          title: "",
          description: "",
          tags: []
        }
      ]
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get("rest/articles");
      // this.model = res.data;
      this.model = res.data;
    },
    remove(row) {
      this.$confirm(`是否确定要删除文章 "${row.title}"`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        const res = await this.$http.delete(`rest/articles/${row._id}`);
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