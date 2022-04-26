const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const postModel = require("../../models/posts/postModel");
const uuid = require('uuid')

const GetPosts = require("../../functions/posts/getPosts");

router.get("/posts", async (req, res) => {
  let posts = await GetPosts();
  return res.send(JSON.stringify(posts));
});

router.post("/post", async (req, res) => {
  await mongoose.connect("mongodb://localhost:27017/mydb");
  req.session.id = uuid.v4()
  console.log(req.session)
  const newPost = new postModel({
    postTitle: req.body.title || "wagwan",
    author: "test"/*req.session.user.username*/,
    content: req.body.content || "wagwan",
  });

  await newPost.save();

  res.send("Ny post tillagd");
});




router.delete('/post', async (req, res) => {
    await mongoose.connect("mongodb://localhost:27017/mydb")
    postModel.deleteOne({ _id: req.body.id }).then(function(){
    console.log("Data deleted"); // Success
    }).catch(function(error){
    console.log(error); // Failure
    });

    // await DeletePost()
    res.send('Tar bort post')
})



module.exports = router;
