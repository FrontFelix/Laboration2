const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const postModel = require("../models/posts/postModel");
const uuid = require('uuid')



// Funkar
router.get("/posts", async (req, res) => {
  try {
    const posts = await postModel.find({});
    res.json(posts);
  } catch (err) {
    res.send("Error getting posts")
  }
});

router.post("/post", async (req, res) => {
  if(!req.session.user) return res.status(401).send('You need to login to create a post')
  const newPost = new postModel({
    postTitle: req.body.title || "wagwan",
    author: req.session.username,
    content: req.body.content || "wagwan",
  });
  await newPost.save();

  res.send("Ny post tillagd");
});




router.delete('/post/:id', async (req, res) => {
    if(!req.session.user) return res.status(401).send('You need to login to delete a post')
    const {id} = req.params
    postModel.deleteOne({ _id: id }).then(function(){
    console.log("Data deleted"); // Success
    }).catch(function(error){
    console.log(error); // Failure
    });

    // await DeletePost()
    res.send('Tar bort post')
})



module.exports = router;
