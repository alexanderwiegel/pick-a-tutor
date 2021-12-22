const express = require("express");
const app = (module.exports = express());

const search = require("../utils/search");

const User = require("../db/model/User");
const Course = require("../db/model/Course");

const { SuccessfulResponse } = require("../utils/response");
const { Op } = require("sequelize");

app.get("/api/tutors", async (req, res) => {
    let tutors = await User.findAll({
        where: {
            [Op.and]: {
                isTutor: true,
                [Op.or]: [
                    search(req.query.search, "firstName"),
                    search(req.query.search, "lastName"),
                ],
            },
        },
        include: {
            model: Course,
        },
    });
    res.json(new SuccessfulResponse("List of tutors", tutors));
});

// app.post("/api/tutors", async (req, res) => {
//     let existing_user = await User.findOne({
//         where: { email: req.body.email },
//     });
//     if (existing_user) {
//         res.json({ error: "User with this email is already registered" });
//         return;
//     }
//     let user = User.build({
//         firstName: req.body.firstName,
//         lastName: req.body.lastName,
//         email: req.body.email,
//         password: req.body.password,
//         dateOfBirth: req.body.dateOfBirth,
//         gender: req.body.gender,
//         isStudent: false,
//         isTutor: true,
//         isAdmin: false,
//         status: 0,
//     });
//     await user.save();
//     res.json(user);
// });
