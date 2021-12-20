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
    let user = User.build({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        dateOfBirth: req.body.dateOfBirth,
        gender: req.body.gender,
        isStudent: student,
        isTutor: tutor,
        isAdmin: admin,
        status: 0,
    });
    await user.save(); 
    res.json(user);
});
