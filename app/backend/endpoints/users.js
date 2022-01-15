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
        res.status(409).json({
            error: "User with this email is already registered",
        });
        return;
    }
    let admin= false;
    let student= false;
    let tutor =false;
    switch (req.body.role){
        case "Admin": {
            admin=true;
            break;
        }

        case "Tutor":
            {
                tutor=true;
                break;

            }
        case "Student" :{
            student=true;
            break;
        }   

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
        isStudent: student,
        isTutor: tutor,
        isAdmin: admin,
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
            res.json("Success");
        } catch (e) {
            res.json("Error");
        }
    }
});
