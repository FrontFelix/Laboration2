const express = require('express')
const router = express.Router()
const createUser = require('../../functions/user/createUser')


router.post('/user', async (req, res) => {
    await createUser()
    res.send('Ny user tillagd')
})

module.exports = router