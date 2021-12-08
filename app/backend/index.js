const app = require('express')();

/* import models */
const Course = require('./db/model/Course');
const TutorCourse = require('./db/model/TutorCourse');
const User = require('./db/model/User');

const PORT = 3001;

/* Add headers that allow access to the resource */
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
})

app.get('/', (req, res) => {
    res.send(`Hello world! Node.js version is ${process.version}`);
})

app.get('/api/users', (async (req, res) => {
    res.json(await User.findAll());
}))

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

app.get('/api/courses', (async (req, res) => {
    res.json(await User.findAll());
}))

app.listen(PORT);
console.log(`Listening on port ${PORT}`);
