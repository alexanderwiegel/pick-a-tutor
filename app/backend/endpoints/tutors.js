const express = require('express');
const app = module.exports = express();

const search = require('../utils/search');

const User = require('../db/model/User');
const Course = require('../db/model/Course');

app.get('/api/tutors', (async (req, res) => {
    let tutors = await User.findAll({
        where: {
            isTutor: true
        },
        include: {
            model: Course,
            where: search(req.query.search)
        }
    });
    let ids = [];
    tutors.forEach(tutor => ids.push(tutor.id));
    tutors = await User.findAll({
        where: {
            id: ids
        },
        include: {
            model: Course,
        }
    });
    res.json(tutors);
}))
