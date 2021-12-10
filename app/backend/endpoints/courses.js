const express = require("express");
const app = module.exports = express();

const Course = require("../db/model/Course");

app.get("/api/courses", (async (req, res) => {
    res.json(await Course.findAll());
}))
