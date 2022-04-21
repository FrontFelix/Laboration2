const express = require('express')
const router = express.Router()
const mongoose = require("mongoose");
const postModel = require('../../models/posts/postModel')


// createUser().catch((err) => console.log(err));

// async function createUser() {
// }


router.post('/post', async (req, res) => {
    await mongoose.connect("mongodb://localhost:27017/mydb")

    const newPost = new postModel ({
    postTitle: "First post", 
    author: "BelleBror",
    content: "Idag har jag solat och badat med min vän på hans farsas båt",
    })


    await newPost.save();

    res.send('Ny post tillagd')
})

module.exports = router