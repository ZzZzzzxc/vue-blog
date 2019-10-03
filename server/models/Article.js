const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    tags: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Tag" }],
    title: { type: String },
    subTitle: { type: String },
    description: { type: String },
    context: { type: String },
    contentHtml:{ type: String },
    createTime: { type: String },
    lastEditTime: {
      type: String
    }
  }
);

module.exports = mongoose.model("Article", schema);
