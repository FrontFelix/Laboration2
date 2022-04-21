const mongoose = require("mongoose");
const userSchema = require('../../schemas/user_schema')
const userModel = mongoose.model("User", userSchema)

module.exports = userModel