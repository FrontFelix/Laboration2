const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const users = require('../models/user/userModel')
const mongoose = require('mongoose')
const uuid = require('uuid')

// Login user
router.post('/account/login', async (req, res) => {
    let user = await users
    .findOne({username : req.body.name})
    if(!user) return res.status(404).send('ingen user')
    let matchPassword = await bcrypt.compare(req.body.password, user.password) // returns true or false
    if(!matchPassword) return res.status(401).json('Wrong username or password') // if false
    req.session.user = user

    res.json(user)
})

// register new user
router.post("/account/register", async (req, res) => {
    //CHECK IF USERNAME OR EMAIL EXISTS
    let FoundUser = await users
    .findOne({username: req.body.username} || {userEmail: req.body.email})
    if(FoundUser) return res.status(409).json('User with that email or username already exists')
    
    //Create new user
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const user = new users({
        username : req.body.username,
        email : req.body.email,
        password : hashedPassword,
    })
    await user.save()
    res.send("wagwan")
})

router.get('/account/user', async (req,res) => {
    if(!req.session.user) return res.status(401).send('You are not logged in')

    res.json(req.session.user)
})

// LOGOUT USER
router.delete('/account/logout', async (req, res) => {
    if(!req.session.user) return res.status(401).send('You are not logged in')

    req.session = null
    res.send('Successfully logged out')
})
    
   


module.exports = router