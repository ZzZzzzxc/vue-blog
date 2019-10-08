<template>
  <div>
    <h1>物品列表</h1>
    <el-table :data="items">
      <el-table-column prop="name" label="name" width="240"></el-table-column>
      <el-table-column prop="description" label="description"></el-table-column>
      <el-table-column prop="context" label="context"></el-table-column>
      <el-table-column prop="avatar" label="avatar">
        <template slot-scope="scope">
          <img :src="scope.row.avatar" alt="" style="height:3rem">
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作" width="180">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click="$router.push(`/abouts/edit/${scope.row._id}`)"
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
      items: []
    };
  },
  methods: {
    async fetch() {
      const res = await this.$http.get("rest/abouts");
      this.items = res.data;
    },
    async remove(row) {
      this.$confirm(`此操作将永久删除该物品"${row.name}"`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        const res = await this.$http.delete(`rest/abouts/${row._id}`);
        this.$message({
          type: "success",
          message: "删除成功!"
        });
        this.fetch()
      });
    }
  },
  created() {
    this.fetch();
  }
};
</script>