const Review = require("../db/model/Review");
const { SuccessfulResponse, FailedResponse } = require("../utils/response");
const jwt = require("jsonwebtoken");
const User = require("../db/model/User");
const Course = require("../db/model/Course");
const TutorCourse = require("../db/model/TutorCourse");
const jwtDecode = require("jwt-decode");
const {Sequelize} = require("sequelize");
const Op = Sequelize.Op;


//************* Get All reviews ***************

const getReviews = async (req, res) => {
    try {
        let reviews = await Review.findAll({
            include: [
                { model: TutorCourse, include: [Course] },
                { model: User, as: "student" },
                { model: User, as: "tutor" },
            ],
            where: {
                courseId: req.query.courseId,
            },
        });
        res.json(new SuccessfulResponse("Reviews", reviews));
    } catch (e) {
        res.json(new FailedResponse(e.message));
    }
};

exports.getReviews = getReviews;

//************* Get All reported reviews ***************

const getReportedReviews = async (req, res) => {
    try {
        let reviews = await Review.findAll({
            include: [
                { model: TutorCourse, include: [Course] },
                { model: User, as: "student" },
                { model: User, as: "tutor" },
                { model: User, as: "reporter" },
            ],
            where: {
                reportReview: Review.REPORTED,
            },
        });
        res.json(new SuccessfulResponse("Reported reviews", reviews));
    } catch (e) {
        res.json(new FailedResponse(e.message));
    }
};

exports.getReportedReviews = getReportedReviews;

//************* Calculate review rating ***************

const calculateNewRating = async function calculateNewRating(courseId) {
    let course = await TutorCourse.findOne({
        where: { id: courseId },
    });
    let reviews = await Review.findAll({
        where: { courseId: courseId },
    });
    let r_sum = 0.0;
    for (let i = 0; i < reviews.length; i++) {
        r_sum = r_sum + reviews[i].rating;
    }
    let rating = r_sum / reviews.length;
    rating = Math.round((rating + Number.EPSILON) * 100) / 100;
    course.nRatings = reviews.length;
    if (course.nRatings === 0)
        course.rating = 0;
    else
        course.rating = rating;
    await course.save();
    console.log("New rating for course id: " + courseId + ": " + course.rating);
}

exports.calculateNewRating = calculateNewRating;


//************* Calculate tutor rating ***************

const tutorNewRating = async function tutorNewRating(tutorId){
    let user = await User.findOne({
        where: { id: tutorId}
    });
    let tutorReviews = await TutorCourse.findAll({
        where: {
             UserId: tutorId,
             rating: {
                 [Op.gt]: 0,
             }
        }
    });
    let ratingsSum = 0.0;
    let nRatings = 0.0;
    for (let i = 0; i < tutorReviews.length; i++){
        ratingsSum = ratingsSum + tutorReviews[i].rating;
        nRatings = nRatings + tutorReviews[i].nRatings;
    }
    if (tutorReviews.length === 0) return;
    let rating = ratingsSum / tutorReviews.length;
    rating = Math.round((rating + Number.EPSILON) * 100) / 100;
    user.nRatings = nRatings;
    if (nRatings === 0)
        user.rating = 0;
    else
        user.rating = rating;
    await user.save();
    console.log("New rating for tutor id: " + tutorId + ": " + user.rating);
}

exports.tutorNewRating = tutorNewRating;

//************* Create review ***************

const addReview = async (req, res) => {
    try {
        let token = req.headers["authorization"];
        let decoded = jwtDecode(token);
        let review = Review.build({
            reporterId: decoded.id,
            studentId: req.body.studentId,
            tutorId: req.body.tutorId,
            courseId: req.body.courseId,
            rating: req.body.rating,
            ratingComments: req.body.ratingComments,
        });
        await review.save();
        console.log("Created review: " + review);

        await exports.calculateNewRating(req.body.courseId);
        await exports.tutorNewRating(req.body.tutorId)

        res.json(new SuccessfulResponse("Review created", [review]));
    } catch (e) {
        res.json(new FailedResponse(e.message));
    }
};

exports.addReview = addReview;

//************* Report a review ***************

const reportReview = async (req, res) => {
    try {
        let review = await Review.findOne({ where: { id: req.params.id } });
        let token = req.headers.authorization.split(" ")[1]; // Bearer Token
        let decodedToken = jwt.verify(token, "privatekey");

        review.reportReview = Review.REPORTED;
        review.reportReviewComments = req.body.reportComments;
        review.reporterId = decodedToken.id;
        await review.save();
        res.json(new SuccessfulResponse("Review reported", [review]));
    } catch (e) {
        res.json(new FailedResponse(e.message));
    }
};

exports.reportReview = reportReview;

//************* Approve or Reject Review based on Id and reportReviewStatus" ***************

const approveReview = async (req, res) => {
    const review = await Review.findOne({
        where: { id: req.params.id },
    });

    console.log("This is review:" + review);

    if (review) {
        try {
            review.reportReview = Review.NOT_REPORTED;
            await review.save()
            res.json(
                new SuccessfulResponse(
                    "Review id " + review.id + " successfully updated",
                    [review]
                )
            );
        } catch (e) {
            res.json(
                new FailedResponse(
                    "Review id " + review.id + " updation failed" + e
                )
            );
        }
    } else {
        res.json(
            new FailedResponse("No review exists with provided review id")
        );
    }
};

exports.approveReview = approveReview;

//************* Delete review ***************

const deleteReview = async (req, res) => {
    try {
        let review = await Review.findOne({
            where: { id: req.params.id },
        });

        let tutorId = review.tutorId;

        await review.destroy();

        await calculateNewRating(req.body.courseId);

        await tutorNewRating(tutorId);

        res.json(
            new SuccessfulResponse("Review successfully deleted", [review])
        );
    } catch (e) {
        return res.json(new FailedResponse(e.message));
    }
};

exports.deleteReview=deleteReview;



