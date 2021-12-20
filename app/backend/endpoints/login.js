const bcryptjs = require("bcryptjs");
const express = require("express");
const app = (module.exports = express());

const jwt = require("jsonwebtoken");
const User = require("../db/model/User");

app.use(express.json());

app.post("/api/login", async (req, res) => {
    let existing_user = await User.findOne({
        where: {
            email: req.body.email,
            // password: req.body.password,
        },
    });
    if (existing_user) {
        if (await bcryptjs.compare(req.body.password, existing_user.password)) {
            let email = req.body.email;
            const token = jwt.sign(email, "privatekey");

            res.json({ email: req.body.email, token: token });
        } else {
            res.json({ error: "Incorrect credentials!" });
        }
    } else res.json({ error: "User is not found or email is incorrect" });
});
