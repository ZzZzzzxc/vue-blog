module.exports = app => {
  const router = require("express").Router();
  const mongoose = require("mongoose");
  // const Article = require('../../models/Article')

  const Article = mongoose.model("Article");
  const Tag = mongoose.model("Tag");

 

//   router.get("/news/list", async (req, res) => {
//     // const parent = await Category.findOne({
//     //   name: '新闻分类'
//     // }).populate({
//     //   path: 'children',
//     //   populate: {
//     //     path: 'newsList'
//     //   }
//     // }).lean()

//     //聚合查询
//     const parent = await Category.findOne({
//       name: "新闻分类"
//     });
//     const cats = await Category.aggregate([
//       { $match: { parent: parent._id } },
//       {
//         $lookup: {
//           from: "articles", //关联的集合名，默认为模型名的首字母小写复数形式
//           localField: "_id", //本地
//           foreignField: "categories", //外键
//           as: "newsList"
//         }
//       },
//       {
//         $addFields: {
//           newsList: { $slice: ["$newsList", 5] }
//         }
//       }
//     ]);
//     //取id
//     const subCats = cats.map(v => v._id);
//     //在头上添加一个热门分类
//     cats.unshift({
//       name: "热门",
//       newsList: await Article.find()
//         .where({
//           categories: { $in: subCats }
//         })
//         .populate("categories")
//         .limit(5)
//         .lean()
//     });

//     cats.map(cat => {
//       cat.newsList.map(news => {
//         news.categoryName =
//           cat.name === "热门" ? news.categories[0].name : cat.name;
//         return news;
//       });
//       return cat;
//     });
//     res.send(cats);
//   });

//   // 导入英雄数据
//   router.get("/heroes/init", async (req, res) => {
//     await Hero.deleteMany({});
//     const rawData = [
//       {
//         name: "热门",
//         heroes: [
//           {
//             name: "后羿",
//             avatar:
//               "https://game.gtimg.cn/images/yxzj/img201606/heroimg/169/169.jpg"
//           },
//           {
//             name: "孙悟空",
//             avatar:
//               "https://game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg"
//           },
//           {
//             name: "铠",
//             avatar:
//               "https://game.gtimg.cn/images/yxzj/img201606/heroimg/193/193.jpg"
//           }
//         ]
//       },
      
      
//     ];
//     for (let cat of rawData) {
//       if (cat.name === "热门") {
//         continue;
//       }
//       // 找到当前分类在数据库中对应的数据
//       const category = await Category.findOne({
//         name: cat.name
//       });
//       cat.heroes = cat.heroes.map(hero => {
//         hero.categories = [category];
//         return hero;
//       });
//       // 录入英雄
//       await Hero.insertMany(cat.heroes);
//     }

//     res.send(await Hero.find());
//   });

//   // 英雄列表接口
//   router.get("/heroes/list", async (req, res) => {
//     const parent = await Category.findOne({
//       name: "英雄分类"
//     });
//     //聚合查询
//     const cats = await Category.aggregate([
//       { $match: { parent: parent._id } },
//       {
//         $lookup: {
//           from: "heroes",
//           localField: "_id",
//           foreignField: "categories",
//           as: "heroList"
//         }
//       }
//     ]);
//     const subCats = cats.map(v => v._id);
//     cats.unshift({
//       name: "热门",
//       heroList: await Hero.find()
//         .where({
//           categories: { $in: subCats }
//         })
//         .limit(10)
//         .lean()
//     });

//     res.send(cats);
//   });

//   // 视频列表接口
//   router.get("/videos/list", async (req, res) => {
//     const parent = await Category.findOne({
//       name: "视频分类"
//     });
//     //聚合查询
//     const cats = await Category.aggregate([
//       { $match: { parent: parent._id } },
//       {
//         $lookup: {
//           from: "videos",
//           localField: "_id",
//           foreignField: "categories",
//           as: "videoList"
//         }
//       },
//       {
//         $addFields: {
//           videoList: { $slice: ["$videoList", 4] }
//         }
//       }
//     ]);
//     const subCats = cats.map(v => v._id);
//     cats.unshift({
//       name: "热门",
//       videoList: await Video.find()
//         .where({
//           categories: { $in: subCats }
//         })
//         .limit(4)
//         .lean()
//     });

//     res.send(cats);
//   });

//   // 文章详情
//   router.get("/articles/:id", async (req, res) => {
//     const data = await Article.findById(req.params.id).lean();
//     data.related = await Article.find()
//       .where({
//         categories: { $in: data.categories }
//       })
//       .limit(2);
//     res.send(data);
//   });

//   // 英雄详情
//   router.get("/heroes/:id", async (req, res) => {
//     const data = await Hero.findById(req.params.id)
//       .populate("categories items1 items2 partners.hero")
//       .lean();
//     res.send(data);
//   });

  router.get("/tags/list", async (req, res) => {
    const data = await Tag.find();
    res.send(data);
  });

  router.get("/articles/list", async (req, res) => {
    const data = await Article.find();
    res.send(data);
  });

  router.get("/articles/:id", async (req, res) => {
    const data = await Article.findById(req.params.id)
      .populate("tags")
      .lean();
    res.send(data);
  });


  app.use("/web/api", router);
};
