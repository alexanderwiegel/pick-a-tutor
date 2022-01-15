// const StudentEnrolledCourses = require("../db/model/StudentEnrolledCourses");
// const TutorCourse = require("../db/model/TutorCourse");
// const CourseAdditionalInfo = require("../db/model/CourseAdditionalInfo");
const Review = require("../db/model/Review");
// const db = require("../db/db");

// require("../db/associations");

async function run() {
    // Recreate tables
    // await StudentEnrolledCourses.sync();
    // await CourseAdditionalInfo.sync();
    // await Review.sync();
    // await Review.build({
    //     studentId: 1,
    //     tutorId: 1,
    //     courseId: 1,
    //     rating: 1,
    //     reportReviewStatus: 1,
    // }).save();
    // await Review.build({
    //     studentId: 1,
    //     tutorId: 1,
    //     courseId: 1,
    //     rating: 3,
    //     reportReviewStatus: 1,
    // }).save();
    // await Review.build({
    //     studentId: 1,
    //     tutorId: 1,
    //     courseId: 1,
    //     rating: 5,
    //     reportReviewStatus: 1,
    // }).save();
    // await Review.build({
    //     studentId: 1,
    //     tutorId: 2,
    //     courseId: 1,
    //     rating: 8,
    //     reportReviewStatus: 1,
    // }).save();
    // await Review.build({
    //     studentId: 1,
    //     tutorId: 2,
    //     courseId: 1,
    //     rating: 1,
    //     reportReviewStatus: 1,
    // }).save();
    // await db.sync();
    // await StudentEnrolledCourses.build({
    //     tutorCourseId: 1,
    //     userId: 1,
    //     enrolledStatus: 1,
    // }).save();
    /* Example of getting messages for the user
    let user = await User.findOne({
        include: [
            UserProfile,
            { model: Message, as: "sent" },
            {
                model: Message,
                as: "received",
            },
        ],
    });
    let message = await Message.findOne({
        include: [
            { model: User, as: "sender" },
            { model: User, as: "recipient" },
        ],
    }); */
    /* Example of soft-delete:
    let user = await User.findOne({where: {firstName: 'John'}});
    await user.destroy(); */
}

run().then(() => console.log("Database tables were recreated"));
