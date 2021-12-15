const User = require("../db/model/User");
const Course = require("../db/model/Course");
const TutorCourse = require("../db/model/TutorCourse");

async function run() {
    // Recreate tables
    await TutorCourse.sync({ force: true });

    // Do not need these because of ON_CASCADE:
    // await Course.sync({force: true});
    // await User.sync({force: true});

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
        gender: User.GENDER.MALE,
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
        gender: User.GENDER.MALE,
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
        courseId: 1,
        userId: 1,
        coursePricePerHour: 14.99,
    }).save();

    await TutorCourse.build({
        courseId: 2,
        userId: 1,
        coursePricePerHour: 12.99,
    }).save();

    await TutorCourse.build({
        courseId: 3,
        userId: 1,
        coursePricePerHour: 10.99,
    }).save();

    await TutorCourse.build({
        courseId: 4,
        userId: 2,
        coursePricePerHour: 10,
    }).save();

    await TutorCourse.build({
        courseId: 5,
        userId: 2,
        coursePricePerHour: 12,
    }).save();

    /* Example of soft-delete:
    let user = await User.findOne({where: {firstName: 'John'}});
    await user.destroy();
    */
}

run().then(() => console.log("Database tables were recreated"));
