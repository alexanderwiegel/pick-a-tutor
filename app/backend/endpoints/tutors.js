const express = require("express");
const app = module.exports = express();

const User = require("../db/model/User");
const TutorCourse = require("../db/model/TutorCourse");
const Course = require("../db/model/Course");

app.get('/api/tutors', (async (req, res) => {
    let tutors = JSON.parse(JSON.stringify(await User.findAll({where: {isTutor: true}})));
    for (let i = 0; i < tutors.length; i++) {
        let tutorCourses = JSON.parse(JSON.stringify(await TutorCourse.findAll({
            where: {userId: tutors[i].id},
            raw: true
        })));
        tutors[i]['courses'] = [];
        for (let j = 0; j < tutorCourses.length; j++) {
            tutors[i]['courses'].push(JSON.parse(JSON.stringify(await Course.findAll({
                where: {id: tutorCourses[j].courseId},
                raw: true
            }))));
        }
    }

    res.json(tutors);
}))
