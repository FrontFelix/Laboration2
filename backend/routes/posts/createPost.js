const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const postModel = require("../../models/posts/postModel");
const uuid = require('uuid')

// createUser().catch((err) => console.log(err));

// async function createUser() {
// }

router.post("/post", async (req, res) => {
  await mongoose.connect("mongodb://localhost:27017/mydb");
  req.session.id = uuid.v4()
  console.log(req.session)
  const newPost = new postModel({
    postTitle: "wurr",
    author: "PappaHepsever",
    content: "wurr",
  });

  await newPost.save();

  res.send("Ny post tillagd");
});

module.exports = router;
