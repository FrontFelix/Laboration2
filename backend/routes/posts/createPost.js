const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const postModel = require("../../models/posts/postModel");

// createUser().catch((err) => console.log(err));

// async function createUser() {
// }

router.post("/post", async (req, res) => {
  await mongoose.connect("mongodb://localhost:27017/mydb");

  const newPost = new postModel({
    postTitle: "2nd post",
    author: "PappaHepsever",
    content: "I onsdags var det 420, de va gött",
  });

  await newPost.save();

  res.send("Ny post tillagd");
});

module.exports = router;
