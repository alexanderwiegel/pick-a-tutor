require("../../../db/associations");
const Review = require("../../../db/model/Review");
const User = require("../../../db/model/User");
const TutorCourse = require("../../../db/model/TutorCourse");
const Course = require("../../../db/model/Course");

test("Create a review", async () => {
    let student = await User.build({
        firstName: "Student who posted a review",
        lastName: "Student who posted a review",
        email: "s@example.com",
        password: "p",
    }).save();
    let tutor = await User.build({
        firstName: "Tutor who received a review",
        lastName: "Tutor who received a review",
        email: "t@example.com",
        password: "p",
    }).save();
    let course = await Course.build({
        name: "Some course that received a review",
        description: "Some course that received a review",
    }).save();
    let tutorCourse = await TutorCourse.build({
        UserId: tutor.id,
        CourseId: course.id,
    }).save();
    let review = await Review.build({
        studentId: student.id,
        tutorId: tutor.id,
        courseId: tutorCourse.id,
        rating: 4,
    }).save();

    let review_with_course = await Review.findOne({
        where: { id: review.id },
        include: [
            { model: TutorCourse },
            { model: User, as: "tutor" },
            { model: User, as: "student" },
        ],
    });

    let course_with_review = await TutorCourse.findOne({
        where: { id: tutorCourse.id },
        include: [
            {
                model: Review,
                include: [
                    { model: User, as: "tutor" },
                    { model: User, as: "student" },
                ],
            },
        ],
    });

    expect(review_with_course.TutorCourse.id).toBe(tutorCourse.id);
    expect(review_with_course.student.id).toBe(student.id);
    expect(review_with_course.tutor.id).toBe(tutor.id);

    expect(course_with_review.Reviews).toHaveLength(1);

    await student.destroy();
    await tutor.destroy();
    await review.destroy();
    await course.destroy();
    await tutorCourse.destroy();
});
