const express = require('express')
const router = express.Router()


router.post('/login:ID', (req, res) => {
    return res.send('login router')
})

module.exports = router