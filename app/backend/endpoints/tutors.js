const search = require("../utils/search");

const User = require("../db/model/User");
const Course = require("../db/model/Course");

const { SuccessfulResponse, FailedResponse } = require("../utils/response");
const { Op } = require("sequelize");
const bcryptjs = require("bcryptjs");

const getAllTutors = async (req, res) => {
    var tutors = '';
    var tutorId = '';
    if(req.query.tutor_id !=="" && req.query.tutor_id !== undefined && req.query.tutor_id !== "undefined"){
        tutorId = req.query.tutor_id;
        //console.log("tutorId not undefined: " + tutorId);
    }
    else{
        tutorId = {
            [Op.gte]: 0,
        }
        console.log("tutorId " + tutorId);
    }
    //return res.json("tutorId is: " + tutorId);
    tutors = await User.findAll({
        where: {
            [Op.and]: {
                isTutor: true,
                id: tutorId,
            },
            [Op.or]: [
                search(req.query.search, "firstName"),
                search(req.query.search, "lastName")
            ]
        },
        include: {
            model: Course,
        },
    });

    return res.json(new SuccessfulResponse("List of tutors", tutors));
};

const createTutor = async (req, res) => {
    let existing_user = await User.findOne({
        where: { email: req.body.email },
    });

    if (existing_user)
        return res.json(new FailedResponse("User with this email already exists"));

    try {
        let user = User.build({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: await bcryptjs.hash(req.body.password, 10),
            dateOfBirth: new Date(req.body.dateOfBirth),
            gender: req.body.gender,
            isStudent: false,
            isTutor: true,
            isAdmin: false,
            status: 0,
        });

        await user.save();

        res.json(
            new SuccessfulResponse("New tutor successfully created", [user])
        );
    } catch (e) {
        res.json(new FailedResponse(e.message));
    }
};

module.exports = { getAllTutors, createTutor };
