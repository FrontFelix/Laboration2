const express = require("express");
const app = express();
const mongoose = require('mongoose')

const cookieSession = require("cookie-session");

const port = 8080;
var url = "mongodb://localhost:27017/mydb";

app.use(express.json());


mongoose.connect(
  url,
  { useNewUrlParser: true },
  (err) => {
    console.log("Database is connected!");
  }
);

let postRouter = require('./routes/postRouter')
let userRouter = require('./routes/userRouter')


// Prepare tamper-proof cookie (https still needed for secure login)
app.use(
  cookieSession({
    secret: "aVeryS3cr3tK3y",
    maxAge: 1000 * 100, // 10s (quick expiry for testing, usually longer!)
    sameSite: "strict",
    httpOnly: false,
    secure: false,
  })
);


// ROUTES
app.use(postRouter);
app.use(userRouter)
// ROUTES


app.listen(port, () => {
  console.log("Server körs");
});
