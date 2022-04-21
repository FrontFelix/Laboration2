const mongoose = require('mongoose')
const userModel = require('../../models/user/userModel')
const bcrypt = require('bcrypt')


async function createUser(userPassword) {
    await mongoose.connect("mongodb://localhost:27017/mydb")
    const hashedPassword = await bcrypt.hash(userPassword, 10)
    
    const newUser = new userModel ({
    username: "Adam",
    userRealName: "Pappa",
    userEmail: "Adam@hotamail.com",
    userPassword: hashedPassword, 
    userRole: "Admin"
    })


    
    
    await newUser.save();

}

module.exports = createUser