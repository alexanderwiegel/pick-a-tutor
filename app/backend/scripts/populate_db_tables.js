const User = require("../db/model/User");
const Course = require("../db/model/Course");
const TutorCourse = require("../db/model/TutorCourse");
const db = require("../db/db");

require("../db/associations");

async function run() {
    // Recreate tables
    await db.sync({ force: true });

    /* Create rows */

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
        password: "password",
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
        password: "password",
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

    /* Example of soft-delete:
    let user = await User.findOne({where: {firstName: 'John'}});
    await user.destroy();
    */
}

run().then(() => console.log("Database tables were recreated"));
