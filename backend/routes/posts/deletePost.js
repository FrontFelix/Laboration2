const express = require('express')
const router = express.Router()
const mongoose = require("mongoose");
const DeletePost = require('../../functions/posts/deletePost')


router.delete('/post', async (req, res) => {
    await mongoose.connect("mongodb://localhost:27017/mydb")

    await DeletePost()
    res.send('Tar bort post')
})


module.exports = router