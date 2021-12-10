const express = require("express");
const app = module.exports = express();

const User = require("../db/model/User");

app.get("/api/users", (async (req, res) => {
    res.json(await User.findAll());
}))
