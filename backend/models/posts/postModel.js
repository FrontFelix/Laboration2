const mongoose = require("mongoose");
const postSchema = require('../../schemas/posts_schema')
const postModel = mongoose.model("Post", postSchema)

module.exports = postModel