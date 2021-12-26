const User = require("../db/model/TutorCourse");
const search = require("../utils/search");
// const auth = require("../auth/check-auth");
const { Sequelize } = require("sequelize");
const jwtdecode = require("jwt-decode");
const Op = Sequelize.Op;

const getTutorCourses = getTutorCourses.async();

exports.getTutorCourses = getTutorCourses;