const User = require('./model/User');
const Course = require('./model/Course');
const TutorCourse = require('./model/TutorCourse');

User.belongsToMany(Course, {through: TutorCourse});
Course.belongsToMany(User, {through: TutorCourse});

