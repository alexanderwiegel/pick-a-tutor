// const express = require("express");
// const app = (module.exports = express());
const bcryptjs = require("bcryptjs");
const User = require("../db/model/User");
//const Course = require("../db/model/Course");
const Review = require("../db/model/Review");
const TutorCourse = require("../db/model/TutorCourse");
const search = require("../utils/search");
// const auth = require("../auth/check-auth");
const { Sequelize } = require("sequelize");
const jwtdecode = require("jwt-decode");
const Op = Sequelize.Op;

// app.use(express.json());

//************* Get List of All Users & get one by "?search=" ***************

const getallusers = async (req, res, next) => {
    const users = await User.findAll({
        //attributes: [[Sequelize.fn('AVG', Sequelize.col('Reviews.rating')), 'ratingAvg']],
            where: {
            [Op.or]: [
                search(req.query.search, "firstName"),
                search(req.query.search, "lastName"),
                search(req.query.search, "email"),
            ],
        },
        include: [Review]
    });

    res.json({
        success: true,
        message: "List of all users",
        records: users.length,
        data: users,
    });
};

exports.getallusers = getallusers;

// // app.get("/api/user/:email", async (req, res) => {
// //     const user = await User.findOne({ where: { email: req.params.email } });
// //     if (user == null) {
// //         res.status(401).json("User do not exists!");
// //     } else {
// //         res.status(200).json(user);
// //     }
// // });

//************* Create New User ***************

const createuser = async (req, res, next) => {
    let existing_user = await User.findOne({
        where: { email: req.body.email },
    });


   var emailsuffix= (req.body.email).split("@")[1]
   var isithsemail=emailsuffix.endsWith("hs-fulda.de")
     
    if (isithsemail)
    {



    if (existing_user) {
        res.json({
            success: true,
            message: "User Already Exists",
            records: existing_user.length,
            data: existing_user,
        });
        return;
    }
    let admin = false;
    let student = false;
    let tutor = false;
    switch (req.body.role) {
        case "Admin": {
            admin = true;
            break;
        }

        case "Tutor": {
            tutor = true;
            break;
        }
        case "Student": {
            student = true;
            break;
        }
    }

    let data = [
        req.body.firstName ?? "Undefined",
        req.body.lastName ?? "Undefined",
        req.body.email ?? "Undefined",
        req.body.password ?? "Undefined",
        req.body.dateOfBirth ?? "Undefined",
        req.body.gender ?? "Undefined",
        req.body.isStudent ?? "Undefined",
        req.body.isTutor ?? "Undefined",
        req.body.isAdmin ?? "Undefined",
    ];

    if (data.indexOf("Undefined") != -1) {
        res.json({
            success: false,
            message: "Some or all field values are missing ",
            records: 0,
        });
    } else {
        let epassword;

        //  ((req.body.email).split("@")[1])

        epassword = await bcryptjs.hash(req.body.password, 10);

        let user = User.build({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: epassword,
            dateOfBirth: new Date(req.body.dateOfBirth),
            gender: req.body.gender,
            isStudent: req.body.isStudent,
            isTutor: req.body.isTutor,
            isAdmin: req.body.isAdmin,
            status: 0,
        });

        await user.save().catch((e) => {
            console.log(e);
        });

        res.json({
            success: true,
            message: "User Successfully Created",
            records: user.length,
            data: user,
        });
    }
}
else {
    res.json({
        success: true,
        message: "Only Fulda University registered persons are allowed to register!",
        records: 0,
        // data: user,
    });
    
}
};

exports.createuser = createuser;

//************* Update Existing User ***************
//***This API will check if user being updated and user in the token are same or user in the token is admin then allow to update**

const updateuser = async (req, res, next) => {
    const user = await User.findOne({
        where: { email: req.params.email },
    });

    var token = req.headers["authorization"];
    var decoded = jwtdecode(token);
    // console.log(decoded);

    if (decoded.email == req.params.email || decoded.isAdmin == true) {
        if (user) {
            let epassword =
                (req.body.password &&
                    (await bcryptjs.hash(req.body.password, 10))) ??
                user.password;
            // epassword = await bcryptjs.hash(req.body.password, 10);
            try {
                await user.update({
                    firstName: req.body.firstName ?? user.firstName,
                    lastName: req.body.lastName ?? user.lastName,
                    email: user.email, //Email cannot be updated by update API
                    password: epassword,
                    // dateOfBirth: new Date("05.08.1985"),
                    // dateOfBirth: new Date(req.body.dateOfBirth) ??new Date(user.dateOfBirth),  This has issues
                    gender: req.body.gender ?? user.gender,
                    isStudent: req.body.isStudent ?? user.isStudent,
                    isTutor: req.body.isTutor ?? user.isTutor,
                    isAdmin: req.body.isAdmin ?? user.isAdmin,
                    status: req.body.status ?? user.status,
                });
                res.json({
                    success: true,
                    message: "User '" + user.email + "' successfully updated",
                    records: user.length,
                });
            } catch (e) {
                res.json({
                    success: false,
                    message: "User " + user.email + " updation failed" + e,
                    records: user.length,
                });
            }
        } else {
            res.json({
                success: false,
                message: "Provided user doesn't exist or is already deleted",
            });
        }
    } else {
        res.json({
            success: false,
            message:
                "User " +
                decoded.email +
                " not allowed to user update " +
                req.params.email,
            records: 0,
        });
    }
};

exports.updateuser = updateuser;

//************* Delete Existing Course ***************
//***This API will check if user being updated and user in the token are same or user in the token is admin then allow to update**

const deleteuser = async (req, res, next) => {
    const user = await User.findOne({ where: { email: req.params.email } });

    var token = req.headers["authorization"];
    var decoded = jwtdecode(token);

    if (decoded.email == req.params.email || decoded.isAdmin == true) {
        if (user) {
            try {
                await user.destroy();
                res.json({
                    success: true,
                    message: "User '" + user.email + "' successfully deleted",
                    records: user.length,
                });
            } catch (e) {
                res.json({
                    success: false,
                    message: "User " + user.email + " deletion failed",
                    records: user.length,
                });
            }
        } else {
            res.json({
                success: false,
                message: "Provided user doesn't exist or is already deleted",
            });
        }
    } else {
        res.json({
            success: false,
            message:
                "User " +
                decoded.email +
                " not allowed to user update " +
                req.params.email,
            records: 0,
        });
    }
};

exports.deleteuser = deleteuser;
