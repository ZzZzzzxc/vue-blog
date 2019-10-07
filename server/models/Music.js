const mongoose = require("mongoose");

const schema = new mongoose.Schema(
  {
    singer: { type: String },
    song: { type: String },
    id: { type: String }
  }
);

module.exports = mongoose.model("Music", schema);
