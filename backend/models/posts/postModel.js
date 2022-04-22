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

export default mongoose.model("post", postSchema);
