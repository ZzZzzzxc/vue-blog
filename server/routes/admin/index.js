//导出一个函数，并在被调用时使用app参数接收入口文件的app实例
//封装一个通用的CRUD接口
module.exports = app => {
  const express = require("express");
  //子路由
  const router = express.Router({
    //父级路由合并到子级路由
    mergeParams: true
  });
  //中间件
  //校验及错误处理
  const assert = require("http-assert");
  //token设置及处理
  const jwt = require("jsonwebtoken");
  //管理员模型
  const AdminUser = require("../../models/AdminUser");
  //登录校验
  const authMiddleware = require("../../middleware/auth");
  //模型名获取
  const resourceMiddleware = require("../../middleware/resource");

  const mongoose = require("mongoose");
  const Tag = mongoose.model("Tag");
  const Article = mongoose.model("Article");
  //通用CRUD接口
  //新建分类
  router.post("/", async (req, res) => {
    const model = await req.Model.create(req.body);
    //当新建文章时增加标签下的文章数
    if (req.Model.modelName === "Article") {
      for (let i = 0; i < req.body.tags.length; i++) {
        Tag.findByIdAndUpdate(
          { _id: req.body.tags[i] },
          { $inc: { num: 1 } },
          { new: true, upsert: true, usefindandmodify: false },
          function() {}
        );
      }
    }
    res.send(model);
  });
  //修改分类
  router.put("/:id", async (req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body);
    //当修改文章标签时增加减少文章数
    if (req.Model.modelName === "Article") {
      for (let i = 0; i < req.body.old.length; i++) {
        for (let j = 0; j < req.body.new.length; j++) {
          if (req.body.old[j] == req.body.new[i]) {
            req.body.old.splice(j, 1);
            req.body.new.splice(i, 1);
          }
        }
      }
      for (let i = 0; i < req.body.new.length; i++) {
        Tag.findByIdAndUpdate(
          { _id: req.body.new[i] },
          { $inc: { num: 1 } },
          { new: true, upsert: true, usefindandmodify: false },
          function() {}
        );
      }
      for (let i = 0; i < req.body.old.length; i++) {
        Tag.findByIdAndUpdate(
          { _id: req.body.old[i] },
          { $inc: { num: -1 } },
          { new: true, upsert: true, usefindandmodify: false },
          function() {}
        );
      }
    }
    res.send(model);
  });
  //删除分类
  router.delete("/:id", async (req, res) => {
    //当删除文章时减少标签下的文章数
    if (req.Model.modelName === "Article") {
      Article.findById(req.params.id, function(err, docs) {
        if (err) console.log(err);
        for (let i = 0; i < docs.tags.length; i++) {
          Tag.findByIdAndUpdate(
            { _id: docs.tags[i] },
            { $inc: { num: -1 } },
            { new: true, upsert: true, usefindandmodify: false },
            function() {}
          );
        }
      });
    }
    //
    await req.Model.findByIdAndDelete(req.params.id, req.body);
    res.send({
      success: true
    });
  });
  //获取分类列表
  router.get("/", async (req, res) => {
    //区分特殊情况，展示获取Category的父级分类
    const queryOptions = {};
    if (req.Model.modelName === "Article") {
      queryOptions.populate = "tag";
    }
    const items = await req.Model.find().setOptions(queryOptions);
    // .limit(100);
    res.send(items);
  });
  //获取某个分类的具体信息
  router.get("/:id", async (req, res) => {
    const items = await req.Model.findById(req.params.id);
    res.send(items);
  });
  //挂载子路由
  //通过中间件获取要操作的模型名
  app.use(
    "/admin/api/rest/:resource",
    // authMiddleware(),
    resourceMiddleware(),
    router
  );

  //处理文件上传
  const multer = require("multer");
  const upload = multer({ dest: __dirname + "/../../uploads" });
  app.post("/admin/api/upload", upload.single("file"), async (req, res) => {
    const file = req.file;
    // file.url = `http://zhangxc.cn/uploads/${file.filename}`;
    file.url = `http://localhost:3000/uploads/${file.filename}`;
    res.send(file);
  });

  // app.post("/admin/api/login", async (req, res) => {
  //   const { username, password } = req.body;
  //   // 1.根据用户名找用户
  //   const user = await AdminUser.findOne({ username }).select("+password");
  //   assert(user, 422, "用户不存在");
  //   // 2.校验密码
  //   const isValid = require("bcryptjs").compareSync(password, user.password);
  //   assert(isValid, 422, "密码错误");
  //   // 3.返回token
  //   const token = jwt.sign({ id: user._id }, app.get("secret"));
  //   res.send({ token });
  // });

  // 错误处理函数
  // app.use(async (err, req, res, next) => {
  //   // console.log(err)
  //   res.status(err.statusCode || 500).send({
  //     message: err.message
  //   });
  // });
};
