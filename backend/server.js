const express = require('express')
const app = express()
const port = 8080
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://0.0.0.0:27017/mydb";

let registerRouter = require('./routes/authentication/register')
let loginRouter = require('./routes/authentication/login')
let createUserRouter = require('./routes/user/createUser')
let createPostRouter = require('./routes/posts/createPost')
let deletePostRouter = require('./routes/posts/deletePost')
let deleteUserRouter = require('./routes/user/deleteUser')



MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  let database = db.db('mydb')
  
  
  console.log("Database created!");
  db.close();
});


// MongoClient.connect(url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//     dbo.createCollection("users", function(err, res) {
//       if (err) throw err;
//       console.log("Collection created!");
//       db.close();
//     });
//   });
  




// ROUTES
app.use(createUserRouter)
app.use(registerRouter)
app.use(loginRouter)
app.use(createPostRouter)
app.use(deletePostRouter)
app.use(deleteUserRouter)
// ROUTES

app.get('/test', async (req, res) => {
    return await res.send('testar')
})

app.listen(port, () => {
    console.log('Server körs')
})