const express = require("express");
const router = express.Router();
const GetPosts = require("../../functions/posts/getPosts");

router.get("/posts", async (req, res) => {
  let posts = await GetPosts();
  return res.send(JSON.stringify(posts));
});

module.exports = router;
