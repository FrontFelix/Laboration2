const mongoose = require("mongoose");
const { Schema } = mongoose

const userSchema = new Schema({
    username: String,
    userRealName: String,
    userEmail: String,
    userPassword: String,
    userRole: String,
})

module.exports = userSchema

