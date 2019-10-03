const mongoose = require("mongoose");
//创建Schema
const schema = new mongoose.Schema({
  name: { type: String },
  num: { type: Number, default: 0 }
});
schema.virtual("articlesList", {
  localField: "_id",
  foreignField: "tags",
  justOne: false,
  ref: "Article"
});

//导出Model
module.exports = mongoose.model("Tag", schema);
