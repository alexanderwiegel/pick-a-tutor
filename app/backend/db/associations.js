const User = require("./model/User");
const Course = require("./model/Course");
const TutorCourse = require("./model/TutorCourse");
const Message = require("./model/Message");

User.belongsToMany(Course, { through: TutorCourse });
Course.belongsToMany(User, { through: TutorCourse });

User.hasMany(Message, {
    foreignKey: "senderId",
});
User.hasMany(Message, {
    foreignKey: "recipientId",
});
