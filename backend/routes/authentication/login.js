const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const users = require('../../models/user/userModel')
const mongoose = require('mongoose')
const uuid = require('uuid')

router.post('/login', async (req, res) => {
    console.log('Ska logga in')
    // Check if username and password is correct
    // if(req.session.id) {
    //     console.log('finns id redan')
    //     console.log(req.cookies["session"])
    //     console.log(req.session.id)
    //     return res.send('user logged in')
    // }
    await mongoose.connect("mongodb://localhost:27017/mydb")
    users.find({username: req.body.name}).then(async function (user) {
        if(!user[0] || !await bcrypt.compare(req.body.password, user[0].userPassword)){
            console.log('Fel användarnamn eller löseord')
            res.status(401).json('Wrong username orr password')
            return
        }else {
            req.session.user = user[0]
            req.session.loginDate = new Date()
            console.log("inloggad")
            res.json(req.session.user)
        }
        });
    // console.log(user)
    
    // // Save info about the user to the session (a cookie stored on the clinet)
    // req.session.id = uuid.v4()
    // req.session.username = user.name
    // req.session.loginDate = new Date()
    // req.session.role = undefined // User could have a role (access privileges)
    // res.send('Successful login')
})


router.get('/login', (req, res) => {
    console.log('hämtar user')
    if(req.session.user) {
        console.log('User hämtad')
        return res.json(req.session.user) 
    }
    console.log('User inte hämtad')
    res.send('inte inloggad')
})


module.exports = router
