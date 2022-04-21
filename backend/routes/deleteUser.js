const express = require('express')
const router = express.Router()
const mongoose = require("mongoose");
const DeleteUser = require('.././functions/user/deleteUser')


router.delete('/user', async (req, res) => {
    await mongoose.connect("mongodb://localhost:27017/mydb")

    await DeleteUser()
    res.send('Tar bort user')
})


module.exports = router