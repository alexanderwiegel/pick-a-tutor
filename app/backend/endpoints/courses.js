const express = require("express");
const search = require("../utils/search");
const app = (module.exports = express());
const Course = require("../db/model/Course");
const {Sequelize} = require("sequelize");
const {request, response} = require("express");
const User = require("../db/model/User");


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

app.post("/api/course", async (req,res) => {

    let existingCourse = await Course.findOne({
               where: {name: req.body.name}
    });
    if(existingCourse){
        res.json({
            success: false,
            message: "Course already exists",
            records: existingCourse.length,
            data: existingCourse
        })
    }

    let course = Course.build({
        name: req.body.name,
        description: req.body.description
    });

    await course.save().catch((e) =>{
        console.log(e);
    });

    res.json({
        success: true,
        message: "Course Successfully Saved",
        records: course.length,
        data: course
    })
});

//************* Delete Existing Course ***************

app.delete("/api/course/:id", async (req,res)=>{
    const course = await Course.findOne({
        //where: search(req.body.id, 'id')
        where: { id: req.params.id }
    });

    if(course){
        try{
            await course.destroy();
            res.json({
                success: true,
                message: "Course '" + course.name + "' successfully deleted",
                records: course.length,
            });
        }
        catch (e){
            res.json({
                success: false,
                message: "Course " + course.name + " deletion failed",
                records: course.length,
            });
        }

    }
    else
    {
        res.json({
            success: false,
            message: "Provided course doesn't exist or is already deleted",
        });
    }
});