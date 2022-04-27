const express = require("express");

app.delete("/logout", (req, res) => {
  if (!req.session.id) {
    return res.status(400).send("Cannot logout when you are not logged in");
  }
  req.session = null;
  res.send("Your are now logged out");
});