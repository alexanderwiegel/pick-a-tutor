const express = require("express");
const app = (module.exports = express());

let courses = require("./courses");
let login = require("./login");
let tutors = require("./tutors");
let users = require("./users");

/* Add headers that allow access to the resource */
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

app.use(courses);
app.use(login);
app.use(tutors);
app.use(users);
