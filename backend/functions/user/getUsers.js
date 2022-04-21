const mongoose = require('mongoose')
const userModel = require('../../models/user/userModel')

async function GetUsers() {
    await mongoose.connect("mongodb://localhost:27017/mydb")
    let users = await userModel.find({});

    return users
}

module.exports = GetUsers