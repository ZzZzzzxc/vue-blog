const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    avatar: { type: String },
    name: { type: String },
    description: { type: String },
    context: { type: String }
  }
);

module.exports = mongoose.model("About", schema);
