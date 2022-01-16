const Course = require("./model/Course");
const Message = require("./model/Message");
const TutorCourse = require("./model/TutorCourse");
const User = require("./model/User");
const UserProfile = require("./model/UserProfile");
const Review = require("./model/Review");
const UserProfileFiles = require("./model/UserProfileFiles");

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

TutorCourse.User = TutorCourse.belongsTo(User);
TutorCourse.Course =  TutorCourse.belongsTo(Course);

TutorCourse.hasMany(Review, {
    foreignKey: "courseId",
});
Review.belongsTo(TutorCourse, {
    foreignKey: "courseId",
});

TutorCourse.Review = TutorCourse.hasMany(Review, {
    foreignKey: "courseId",
});

User.hasMany(Review, {
    as: "posted_reviews",
    foreignKey: "studentId",
});
User.hasMany(Review, {
    as: "received_reviews",
    foreignKey: "tutorId",
});
Review.belongsTo(User, { as: "student" });
Review.belongsTo(User, { as: "tutor" });

// Added by Rakesh Starts

// User.hasMany(UserProfileFiles, {
//     as: "user_profile_files",
//     foreignKey: "id",
// });

// UserProfileFiles.belongsTo(User, { as: "profile_file" });

const StudentEnrolledCourses = require("./model/StudentEnrolledCourses");

// TutorCourse.hasMany(StudentEnrolledCourses, { foreignKey: "tutorCourseId" });

// StudentEnrolledCourses.hasOne(TutorCourse, { foreignKey: "CourseId" });

// Added by Rakesh Ends
