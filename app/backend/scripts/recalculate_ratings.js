require("../db/associations");

const {calculateNewRating, tutorNewRating} = require('../endpoints/reviews');
const TutorCourse = require('../db/model/TutorCourse');
const User = require('../db/model/User');

async function run() {
    let courses = await TutorCourse.findAll();
    for (let i = 0; i < courses.length; i++) {
        await calculateNewRating(courses[i].id);
    }
    let tutors = await User.findAll({where: {isTutor: true}});
    for (let i = 0; i < tutors.length; i++) {
        await tutorNewRating(tutors[i].id);
    }
}

run().then(() => console.log("Raitings were recalculated"));
