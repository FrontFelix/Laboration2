const express = require("express");
const router = express.Router();
const GetUsers = require("../../functions/user/getUsers");

router.get("/users", async (req, res) => {
  let users = await GetUsers();
  return res.send(JSON.stringify(users));
});

module.exports = router;
