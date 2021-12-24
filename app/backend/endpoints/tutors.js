const express = require("express");
const app = (module.exports = express());

const search = require("../utils/search");

const User = require("../db/model/User");
const Course = require("../db/model/Course");

const { SuccessfulResponse, FailedResponse } = require("../utils/response");
const { Op } = require("sequelize");
const bcryptjs = require("bcryptjs");

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

app.post("/api/users", async (req, res) => {
    let existing_user = await User.findOne({
        where: { email: req.body.email },
    });

    if (existing_user) {
        res.json(
            new FailedResponse("User with this email is already registered")
        );
        return;
    }

    let epassword = await bcryptjs.hash(req.body.password, 10);

    let user = User.build({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: epassword,
        dateOfBirth: new Date(req.body.dateOfBirth),
        gender: req.body.gender,
        isStudent: false,
        isTutor: true,
        status: 0,
    });

    await user.save().catch((e) => {
        console.log(e);
    });

    res.json(new SuccessfulResponse("Success", [user]));
});
