const express = require("express");
const app = (module.exports = express());
const bcryptjs = require("bcryptjs");
const User = require("../db/model/User");
const Course = require("../db/model/Course");
const search = require("../utils/search");
const {Sequelize} = require("sequelize");
const Op = Sequelize.Op;

app.use(express.json());

app.get("/api/users", async (req, res) => {
    //const users = await User.findAll({ where: search(req.query.search,'email') });
    const users = await User.findAll({
        where: {
            [Op.or]: [
                search(req.query.search, 'firstName'),
                search(req.query.search, 'lastName'),
                search(req.query.search, 'email'),
            ]
        }
    });
    res.json({
        success: true,
        message : "List of all Users",
        records : users.length,
        data : users
    })
    //res.status(200).json(await User.findAll());
});
/*
app.get("/api/user/:email", async (req, res) => {
    const user = await User.findOne({ where: { email: req.params.email } });
    if (user == null) {
        res.status(401).json("User do not exists!");
    } else {
        res.status(200).json(user);
    }
});
*/
app.post("/api/users", async (req, res) => {
    let existing_user = await User.findOne({
        where: { email: req.body.email },
    });

    if (existing_user) {
        res.status(409).json({
            error: "User with this email is already registered",
        });
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
    res.status(200).json({ message: "Success" });
});

app.delete("/api/user/:email", async (req, res) => {
    const user = await User.findOne({ where: { email: req.params.email } });
    if (user == null) {
        res.json("User do not exists!");
    } else {
        try {
            await user.destroy();
            res.status(200).json("Success");
        } catch (e) {
            res.status(401).json("Error");
        }
    }
});
