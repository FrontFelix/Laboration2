const mongoose = require("mongoose");
const { Schema } = mongoose

const postSchema = new Schema({
    postTitle: String, 
    author: String,
    content: String,
})

module.exports = postSchema