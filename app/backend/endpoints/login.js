const bcryptjs = require("bcryptjs");
// const express = require("express");
// const app = (module.exports = express());

const jwt = require("jsonwebtoken");
const User = require("../db/model/User");

// app.use(express.json());

//************* Login and Generate Token for a user ***************

const loginuser = async (req, res, next) => {
    let existing_user = await User.findOne({
        where: {
            email: req.body.email,
            status: false,
        },
    });

    if (existing_user) {
        // *****Extract User Roles starts****
        const payload = {
            id: existing_user.id,
            email: req.body.email,
            isStudent: existing_user.isStudent,
            isTutor: existing_user.isTutor,
            isAdmin: existing_user.isAdmin,
        };

        if (await bcryptjs.compare(req.body.password, existing_user.password)) {
            let email = req.body.email;
            const token = jwt.sign(payload, "privatekey", { expiresIn: "1d" });

            res.json({
                success: true,
                message: "User Email With Token",
                records: existing_user.length,
                data: { email: req.body.email, token: token },
            });

            // res.status(200).json({ email: req.body.email, token: token });
        } else {
            // res.status(401).json({ message: "Incorrect credentials!" });
            res.json({
                success: false,
                message: "Incorrect Credentials",
                records: 0,
                data: { message: "Incorrect credentials!" },
            });
        }
    }
    // res.status(401).json({
    //     message: "User is not found or email is incorrect",
    // });
    else
        res.json({
            success: false,
            message: "User blocked or doesn't exist or is already deleted",
        });
};

exports.loginuser = loginuser;
