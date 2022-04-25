const mongoose = require("mongoose");
const userModel = require("../../models/user/userModel");
const bcrypt = require("bcrypt");

async function createUser(username, userRealname, userEmail, userPassword) {
  await mongoose.connect("mongodb://localhost:27017/mydb");
  const hashedPassword = await bcrypt.hash(userPassword, 10);

  const newUser = new userModel({
    username: "kingen",
    userRealName: "Pappa",
    userEmail: "Adam@hotamail.com",
    userPassword: hashedPassword,
    isAdmin: true,
  });

  await newUser.save();
}

module.exports = createUser;
