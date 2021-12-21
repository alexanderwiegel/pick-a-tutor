const express = require("express");
const search = require("../utils/search");
const app = (module.exports = express());
const Course = require("../db/model/Course");
const User = require("../db/model/User");
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;

app.use(express.json());

//************* Get List of All Courses ***************

app.get("/api/courses", async (req, res) => {
    //res.json(await Course.findAll({ where: search(req.query.search) }));
    const courses = await Course.findAll({ where: search(req.query.search) });
    res.status(200).json({
        message : "List of all Courses",
        records : courses.length,
        data : courses
    })
});

//************* Get course By Name %Like% ***************
app.get("/api/course/:course", async (req,res) => {

        const course = await Course.findAll({where: {name: {[Op.like]  : '%'+req.params.course+'%'} }});
        var messageText = '';
        if(course.length == 0){
            messageText = "Course not found";
        }
        else if(course.length == 1){
            messageText = course.length + " course found";
        }
        else {
            messageText = course.length + " courses found";
        }
        if(course == null || course.length == 0){
            res.status(200).json({
                //message : "Course not found",
                message : messageText,
                records : course.length
            })
        }
        else {
            res.status(200).json({
                //message : "Course found",
                message : messageText,
                records : course.length,
                data : course
            })
        }
    }
);
