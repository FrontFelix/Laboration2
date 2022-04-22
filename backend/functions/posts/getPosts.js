const mongoose = require("mongoose");
const postModel = require("../../models/posts/postModel");

async function GetPosts() {
  await mongoose.connect("mongodb://localhost:27017/mydb");
  let posts = await postModel.find({});

  return posts;
}

module.exports = GetPosts;
