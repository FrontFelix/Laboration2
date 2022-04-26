const express = require("express");
const app = express();
const port = 8080;
const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
let cors = require("cors");
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://0.0.0.0:27017/mydb";
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

let registerRouter = require("./routes/authentication/register");
let loginRouter = require("./routes/authentication/login");
let createUserRouter = require("./routes/user/createUser");
let createPostRouter = require("./routes/posts/createPost");
let deletePostRouter = require("./routes/posts/deletePost");
let deleteUserRouter = require("./routes/user/deleteUser");
let getUsersRouter = require("./routes/user/getUsers");
let getPostsRouter = require("./routes/posts/getPosts");

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  let database = db.db("mydb");

  console.log("Database created!");
  db.close();
});

// Prepare tamper-proof cookie (https still needed for secure login)
app.use(
  cookieSession({
    secret: "aVeryS3cr3tK3y",
    maxAge: 1000 * 500, // 10s (quick expiry for testing, usually longer!)
    sameSite: "strict",
    httpOnly: false,
    secure: false,
  })
);

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
app.use(createUserRouter);
app.use(registerRouter);
app.use(loginRouter);
app.use(createPostRouter);
app.use(deletePostRouter);
app.use(deleteUserRouter);
app.use(getUsersRouter);
app.use(getPostsRouter);
// ROUTES

app.get("/test", async (req, res) => {
  return await res.send("testar");
});

app.listen(port, () => {
  console.log("Server körs");
});
