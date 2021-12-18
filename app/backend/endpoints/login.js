const express = require("express");
const app = (module.exports = express());

const User = require("../db/model/User");

app.use(express.json());

app.post("/api/login", async (req, res) => {
    let existing_user = await User.findOne({
        where: {
            email: req.body.email,
            password: req.body.password,
        },
    });
    if (existing_user)
        res.json({
            message: `${existing_user.firstName}, you have successfully logged in.`,
        });
    else res.json({ error: "User is not found or email is incorrect" });
});
