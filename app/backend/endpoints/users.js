const express = require("express");
const app = (module.exports = express());

const User = require("../db/model/User");

app.use(express.json());

app.get("/api/users", async (req, res) => {
    res.json(await User.findAll());
});

app.post("/api/users", async (req, res) => {
    let existing_user = await User.findOne({
        where: { email: req.body.email },
    });
    if (existing_user) {
        res.json({ error: "User with this email is already registered" });
        return;
    }
    let user = User.build({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: "password",
        dateOfBirth: new Date("05.08.1985"),
        gender: User.GENDER.MALE,
        isStudent: true,
        isTutor: true,
        isAdmin: false,
        status: 0,
    });
    await user.save();
    res.json(user);
});
