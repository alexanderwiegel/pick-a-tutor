// const express = require("express");
// const app = (module.exports = express());
const bcryptjs = require("bcryptjs");
const User = require("../db/model/User");
const search = require("../utils/search");
// const auth = require("../auth/check-auth");
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;

// app.use(express.json());

//************* Get List of All Users & get one by "?search=" ***************

const getallusers = async (req, res, next) => {
    const users = await User.findAll({
        where: {
            [Op.or]: [
                search(req.query.search, "firstName"),
                search(req.query.search, "lastName"),
                search(req.query.search, "email"),
            ],
        },
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

    if (existing_user) {
        res.json({
            success: true,
            message: "User Already Exists",
            records: existing_user.length,
            data: existing_user,
        });
        return;
    }

    let epassword;

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
};

exports.createuser = createuser;

//************* Update Existing User ***************

const updateuser = async (req, res, next) => {
    const user = await User.findOne({
        where: { email: req.params.email },
    });

    // console.log(user);

    if (user) {
        // let epassword;
        // epassword = await bcryptjs.hash(req.body.password, 10);

        try {
            await user.update({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: user.email, //Email cannot be updated
                password: user.password, //Password cannot be Updated with this API
                // dateOfBirth: new Date("05.08.1985"),
                dateOfBirth: new Date(req.body.dateOfBirth),
                gender: req.body.gender,
                isStudent: req.body.isStudent,
                isTutor: req.body.isTutor,
                isAdmin: req.body.isAdmin,
                status: 0,
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
};

exports.updateuser = updateuser;

//************* Delete Existing Course ***************

const deleteuser = async (req, res, next) => {
    const user = await User.findOne({ where: { email: req.params.email } });

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
};

exports.deleteuser = deleteuser;
