const express = require('express')
const router = express.Router()


router.get('/login', (req, res) => {
      // Check if we are authorized (e.g logged in)
    if (!req.session.id) {
        console.log(req.session)
        return res.status(408).send('You are not logged in')
    }
    // Send info about the session (a cookie stored on the clinet)
    res.send(JSON.stringify(req.session.user))
})

module.exports = router