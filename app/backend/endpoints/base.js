const express = require("express");
const app = (module.exports = express());
const bodyParser = require("body-parser");
const cors = require("cors");

// let courses = require("./courses");
let login = require("./login");
// let tutors = require("./tutors");

let customrouter = require("./customrouter");

require("../db/associations");

/* Add headers that allow access to the resource */
app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});
app.use(cors());
app.options("*", cors());

app.use(bodyParser.json());

// app.use(courses);
// app.use(login);
// app.use(tutors);
app.use("/api", customrouter);
