const express = require("express");
const search = require("../utils/search");
const app = (module.exports = express());
const Course = require("../db/model/Course");
const {Sequelize} = require("sequelize");
const Op = Sequelize.Op;

app.use(express.json());

//************* Get List of All Courses & get one by "?search=" ***************

app.get("/api/courses", async (req, res) => {
    //res.json(await Course.findAll({ where: search(req.query.search) }));
    const courses = await Course.findAll({
        where: search(req.query.search, 'name')
    });
    res.json({
        success: true,
        message: "List of all Courses",
        records: courses.length,
        data: courses
    })
});

//************* Create New Course ***************


