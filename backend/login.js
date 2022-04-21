// const express = require('express')
// const bcrypt = require('bcrypt')
// const uuid = require('uuid')
// const cookieSession = require('cookie-session')
// const user = require('./models/user/userModel')

// // Server Application
// // "Database"
// const user = await user.find({});



// // [{
// //     name: 'David',
// //     password: '$2b$10$Pb5jRnrL0YiU093lcJQX8eTVqGCr6tldbn8zRjjNJiMqYzcGmp6jW'
// // }]

// // Parse request body as json
// app.use(express.json())

// // Prepare tamper-proof cookie (https still needed for secure login)
// app.use(cookieSession({
//     secret: 'aVeryS3cr3tK3y',
//     maxAge: 1000 * 10, // 10s (quick expiry for testing, usually longer!)
//     sameSite: 'strict',
//     httpOnly: true,
//     secure: false
// }))

// /**
//  * Sends back all the users. Just for test purpose.
//  * In a production application we probably dont
//  * want to expose usernames and passwords. 
//  */
// app.get('/user', (req, res) => {
//     res.json(user)
// })

// /**
//  * Hashes the password and saves the user on the server.
//  * Sends back the hased password for demonstation purposes.
//  */
// app.post('/user', async (req, res) => {
//     // Check if the user exists
//     if (user.find(user => user.name === req.body.name)) {
//         return res.status(409).send('Username already exists')
//     }
    
//     // Otherwise hash password and save
//     const hashedPassword = await bcrypt.hash(req.body.password, 10)
//     user.push({ name: req.body.name, password: hashedPassword })
//     res.status(201).send(hashedPassword)
// })

// /**
//  * Login the user and save the session data to a cookie
//  */
// app.post('/login', async (req, res) => {
//     // Check if username and password is correct
//     const user = user.find(user => user.name === req.body.name)
//     if (!user || !await bcrypt.compare(req.body.password, user.password)) {
//         return res.status(401).send('Wrong password or username')
//     }
    
//     // Check if user aleady is logged in
//     if (req.session.id) {
//         return res.send('Already logged in')
//     }

//     // Save info about the user to the session (a cookie stored on the clinet)
//     req.session.id = uuid.v4()
//     req.session.username = user.name
//     req.session.loginDate = new Date()
//     req.session.role = undefined // User could have a role (access privileges)
//     res.send('Successful login')
// })

// /**
//  * Logout the user and remove the cookie and session
//  */
// app.delete('/logout', (req, res) => {
//     if (!req.session.id) {
//         return res.status(400).send('Cannot logout when you are not logged in')
//     }
//     req.session = null
//     res.send('Your are now logged out')
// })

// /**
//  * Returns the information stored in the cookie - for testing...
//  */
// app.get('/login', (req, res) => {
//     // Check if we are authorized (e.g logged in)
//     if (!req.session.id) {
//         return res.status(401).send('You are not logged in')
//     }
//     // Send info about the session (a cookie stored on the clinet)
//     res.send(req.session)
// })

// app.use((req, res) => res.status(404).send())


// // Attach server to network port
// app.listen(3001, () => {
//     console.log('Server is up and running on port 3000');
// })


