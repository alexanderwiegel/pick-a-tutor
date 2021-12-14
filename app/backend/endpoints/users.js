const express = require("express");
const app = (module.exports = express());

const User = require("../db/model/User");

app.use(express.json());

app.get("/api/users", async (req, res) => {
    res.json(await User.findAll());
});

app.post("/api/users", async (req, res) => {
    console.log(req.body);
    let user = User.build({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: "password",
        dateOfBirth: new Date("05.08.1985"),
        gender: 0,
        isStudent: true,
        isTutor: true,
        isAdmin: true,
        status: 0,
    });
    await user.save();
    res.json(user);
});
