const Course = require("./model/Course");
const Message = require("./model/Message");
const TutorCourse = require("./model/TutorCourse");
const User = require("./model/User");
const UserProfile = require("./model/UserProfile");

User.belongsToMany(Course, { through: TutorCourse });
Course.belongsToMany(User, { through: TutorCourse });

User.hasMany(Message, {
    as: "sent",
    foreignKey: "senderId",
});
User.hasMany(Message, {
    as: "received",
    foreignKey: "recipientId",
});
Message.belongsTo(User, { as: "sender" });
Message.belongsTo(User, { as: "recipient" });

User.hasOne(UserProfile);
UserProfile.belongsTo(User);
