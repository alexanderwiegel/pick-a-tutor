const express = require('express');
const search = require('../utils/search');
const app = module.exports = express();

const Course = require('../db/model/Course');

app.get('/api/courses', (async (req, res) => {
    res.json(await Course.findAll({where: search(req.query.search)}));
}))
