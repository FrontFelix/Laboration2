const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const users = require('../../models/user/userModel')


router.post('/login', async (req, res) => {
    // Check if username and password is correct
    const user = users.find(user => user.name === req.body.name)
    if (!user || !await bcrypt.compare(req.body.password, user.password)) {
        return res.status(401).send('Wrong password or username')
    }
    
    // Check if user aleady is logged in
    if (req.session.id) {
        return res.send('Already logged in')
    }
    
    // Save info about the user to the session (a cookie stored on the clinet)
    req.session.id = uuid.v4()
    req.session.username = user.name
    req.session.loginDate = new Date()
    req.session.role = undefined // User could have a role (access privileges)
    res.send('Successful login')
})

module.exports = router