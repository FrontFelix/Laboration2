const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const userModel = require("../../models/user/userModel");
const bcrypt = require("bcrypt");

router.post("/user", async (req, res) => {
  await mongoose.connect("mongodb://localhost:27017/mydb");
  const hashedPassword = await bcrypt.hash(req.body.userPassword, 10);

  const newUser = new userModel({
    username: req.body.username,
    userRealName: req.body.userRealName,
    userEmail: req.body.userEmail,
    userPassword: hashedPassword,
    isAdmin: true,
  });

  await newUser.save();
  res.send("Ny user tillagd");
});

module.exports = router;
