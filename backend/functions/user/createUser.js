const mongoose = require('mongoose')
const userModel = require('../../models/user/userModel')


async function createUser() {
    await mongoose.connect("mongodb://localhost:27017/mydb")
    
    const newUser = new userModel ({
    username: "Adam",
    userRealName: "Pappa",
    userEmail: "Adam@hotamail.com",
    userPassword: "AdamAdam", 
    userRole: "Admin"
    })
    
    await newUser.save();

}

module.exports = createUser