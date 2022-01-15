const Course = require("../db/model/Course");
const Message = require("../db/model/Message");
const TutorCourse = require("../db/model/TutorCourse");
const User = require("../db/model/User");
const UserProfile = require("../db/model/UserProfile");

const db = require("../db/db");

// require("../db/associations");

async function run() {
    // Recreate tables
    await db.sync({ force: true });

    /* Create rows */
//****************** bcrpted password value is "password" ***********************
    await User.build({
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@example.com",
        password: "$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy",
        dateOfBirth: new Date("05.08.1985"),
        gender: User.GENDER.MALE,
        isStudent: true,
        isTutor: true,
        isAdmin: true,
        status: 0,
    }).save();

    await User.build({
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@example.com",
        password: "password",
        dateOfBirth: new Date("05.08.1985"),
        gender: User.GENDER.MALE,
        isStudent: true,
        isTutor: true,
        isAdmin: true,
        status: 0,
    }).save();

    await User.build({
        firstName: "Kyler",
        lastName: "Stark",
        email: "kylerstark@example.com",
        password: "$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy",
        dateOfBirth: new Date("02.18.1990"),
        gender: User.GENDER.FEMALE,
        isStudent: false,
        isTutor: true,
        isAdmin: false,
        status: 0,
    }).save();

    await User.build({
        firstName: "Johnny",
        lastName: "Doh",
        email: "johnnyd@example.com",
        password: "$2a$10$odgaZlCBMLlRuBpkCk51R.HAdAyB0hXONZFtQJYLsSlI.2cp6YwTy",
        dateOfBirth: new Date("08.05.1995"),
        gender: User.GENDER.DIVERSE,
        isStudent: true,
        isTutor: false,
        isAdmin: false,
        status: 0,
    }).save();

    await Course.build({
        name: "Java",
        description: "Java programming language course",
    }).save();

    await Course.build({
        name: "Python",
        description: "Python programming language course",
    }).save();

    await Course.build({
        name: "C#",
        description: "C# programming language course",
    }).save();

    await Course.build({
        name: "Deutsch A1",
        description: "German language for beginners",
    }).save();

    await Course.build({
        name: "Deutsch A2",
        description: "German language for beginners",
    }).save();

    await Course.build({
        name: "2nd Level Java",
        description: "Second Level Java Mate",
    }).save();

    await Course.build({
        name: "3rd Level Advanced java",
        description: "Third level Advanced Java",
    }).save();

    await TutorCourse.build({
        CourseId: 1,
        UserId: 1,
        coursePricePerHour: 14.99,
    }).save();

    await TutorCourse.build({
        CourseId: 2,
        UserId: 1,
        coursePricePerHour: 12.99,
    }).save();

    await TutorCourse.build({
        CourseId: 3,
        UserId: 1,
        coursePricePerHour: 10.99,
    }).save();

    await TutorCourse.build({
        CourseId: 4,
        UserId: 2,
        coursePricePerHour: 10,
    }).save();

    await TutorCourse.build({
        CourseId: 5,
        UserId: 2,
        coursePricePerHour: 12,
    }).save();

    await Message.build({
        UserId: 1,
        senderId: 1,
        recipientId: 2,
        message: "Hey, what's up?",
    }).save();

    await Message.build({
        UserId: 2,
        senderId: 2,
        recipientId: 1,
        message: "All good",
    }).save();

    await UserProfile.build({
        UserId: 1,
        profileImagePath: "profile_image_1639734254.jpg",
        cvPath: "my_cv_1639734264.pdf",
        description:
            "I am a software engineer and I can help you with programming in different languages",
    }).save();

    await User.build({
        userId: 30,
        fileTitle: "Image",
        filePath: "/userdirectory/1/",
        approvalStatus: "PendingApproval",
    }).save();

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
