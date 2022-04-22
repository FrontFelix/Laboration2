const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    postTitle: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("post", postSchema);
