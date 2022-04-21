const express = require('express')
const router = express.Router()

router.post('/register', (req, res) => {
    return res.send('fungerar med router')
})

module.exports = router