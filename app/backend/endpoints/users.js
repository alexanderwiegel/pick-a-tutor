const express = require("express");
const app = (module.exports = express());
const bcryptjs = require("bcryptjs");
const User = require("../db/model/User");

app.use(express.json());

app.get("/api/users", async (req, res) => {
    res.json(await User.findAll());
});

app.get("/api/user/:email", async (req, res) => {
    const user = await User.findOne({ where: { email: req.params.email } });
    if (user == null) {
        res.json("User do not exists!");
    } else {
        res.json(user);
    }
});

app.post("/api/users", async (req, res) => {
    let existing_user = await User.findOne({
        where: { email: req.body.email },
    });

    if (existing_user) {
        res.json({ error: "User with this email is already registered" });
        return;
    }

    let epassword;

    epassword = await bcryptjs.hash(req.body.password, 10);

    let user = User.build({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: epassword,
        // dateOfBirth: new Date("05.08.1985"),
        dateOfBirth: new Date(req.body.dateOfBirth),
        gender: req.body.gender,
        isStudent: req.body.isStudent,
        isTutor: req.body.isTutor,
        isAdmin: req.body.isAdmin,
        status: 0,
    });

    await user.save().catch((e) => {
        console.log(e);
    });
    res.json(user);
});

app.delete("/api/user/:email", async (req, res) => {
    const user = await User.findOne({ where: { email: req.params.email } });
    if (user == null) {
        res.json("User do not exists!");
    } else {
        try {
            await user.destroy();
            res.json("Success");
        } catch (e) {
            res.json("Error");
        }
    }
});
