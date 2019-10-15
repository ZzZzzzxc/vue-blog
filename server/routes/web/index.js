module.exports = app => {
  const router = require("express").Router();
  const mongoose = require("mongoose");

  const Article = mongoose.model("Article");
  const Tag = mongoose.model("Tag");
  const Music = mongoose.model("Music");
  const About = mongoose.model("About");

  //歌单
  router.get("/musics/list", async (req, res) => {
    const data = await Music.find();
    res.send(data);
  });
    //个人卡片
    router.get("/abouts/list", async (req, res) => {
      const data = await About.find();
      res.send(data);
    });
  //标签列表
  router.get("/tags/list", async (req, res) => {
    const data = await Tag.find();
    res.send(data);
  });
  //文章列表
  router.get("/articles/list", async (req, res) => {
    const data = await Article.find({},{context:0,contentHtml:0,tags:0});
    console.log(data)
    res.send(data);
  });
  //文章详情
  router.get("/articles/:id", async (req, res) => {
    const data = await Article.findById(req.params.id)
      .populate("tags")
      .lean();
    res.send(data);
  });
  //根据标签筛选文章
  router.get("/tags/:id", async (req, res) => {
    // console.log(req.params.id)
    const result = await Tag.aggregate([
      {
        $match: {
          _id: mongoose.Types.ObjectId(req.params.id)
        }
      },
      {
        $lookup: {
          from: "articles",
          localField: "_id",
          foreignField: "tags",
          as: "articlesList"
        }
      }
    ]);
    res.send(result);
  });

  app.use("/web/api", router);
};
