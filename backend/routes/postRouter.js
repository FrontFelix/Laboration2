const express = require("express");
const router = express.Router();
const postModel = require("../models/posts/postModel");

// Hämta posts - Funkar
router.get("/posts", async (req, res) => {
  try {
    const posts = await postModel.find({});
    res.json(posts);
  } catch (err) {
    res.send("Error getting posts");
  }
});

///Create post - Funkar
router.post("/post", async (req, res) => {
  if (!req.session.user)
    return res.status(401).send("You need to login to create a post");
  const newPost = new postModel({
    postTitle: req.body.title,
    author: req.session.user.username,
    content: req.body.content,
  });
  await newPost.save();

  res.send("Ny post tillagd");
});

/// Delete post
router.delete("/post/:id", async (req, res) => {
  const { id } = req.params;

  if (!req.session.user)
    return res.status(401).send("You need to login to delete a post");

  let foundPost = await postModel.findOne({ _id: id });
  console.log(foundPost);
  if (req.session.user.username !== foundPost.author)
    return res.status(401).send("Not authorized");

  postModel
    .deleteOne({ _id: id })
    .then(function () {
      console.log("Data deleted"); // Success
    })
    .catch(function (error) {
      console.log(error); // Failure
    });

  // await DeletePost()
  res.send("Tar bort post");
});

// Uppdatera post - funkar
router.put("/post/:id", async (req, res) => {
  if (!req.session.user)
    return res.status(401).send("You need to login to delete a post");
  const { id } = req.params;
  await postModel.updateOne(
    { _id: id },
    {
      postTitle: req.body.title,
      author: req.session.user.username,
      content: req.body.content,
    }
  );
  res.send("Uppdaterar post");
});

module.exports = router;
