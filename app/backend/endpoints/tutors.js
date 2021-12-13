const express = require("express");
const app = module.exports = express();

const search = require("../utils/search");

const User = require("../db/model/User");
const Course = require("../db/model/Course");

app.get('/api/tutors', (async (req, res) => {
    let tutors = await User.findAll({
        where: {
            isTutor: true
        },
        include: {
            model: Course,
            where: search(req.query.search)
        }
    })
    res.json(tutors);
}))
