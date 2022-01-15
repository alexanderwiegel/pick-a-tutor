const Review = require("../db/model/Review");
const { SuccessfulResponse, FailedResponse } = require("../utils/response");
const jwt = require("jsonwebtoken");

const getReviews = async (req, res) => {

    try {
        let reviews = await Review.findAll({
            where: {
                courseId: req.query.courseId,
            },
        });
        res.json(new SuccessfulResponse("Reviews", reviews));
    } catch (e) {
        res.json(new FailedResponse(e.message));
    }
};

const addReview = async (req, res) => {
    try {
        let review = Review.build({
            studentId: req.body.studentId,
            tutorId: req.body.tutorId,
            courseId: req.body.courseId,
            rating: req.body.rating,
            ratingComments: req.body.ratingComments,
        });
        await review.save();
        console.log("Created review: " + review);
        res.json(new SuccessfulResponse("Review created", [review]));
    } catch (e) {
        res.json(new FailedResponse(e.message));
    }
};

const reportReview = async (req, res) => {
    try {
        let review = await Review.findOne({ where: { id: req.params.id } });
        let token = req.headers.authorization.split(" ")[2]; // Bearer Token
        let decodedToken = jwt.verify(token, "privatekey");

        review.reportReview = Review.REPORTED;
        review.reportComments = req.body.reportComments;
        review.reporterId = decodedToken.id;
        await review.save();
        res.json(new SuccessfulResponse("Review reported", [review]));
    } catch (e) {
        res.json(new FailedResponse(e.message));
    }
};

//************* Approve or Reject Review based on Id and reportReviewStatus" ***************

const approvereview = async (req, res, next) => {
    const review = await Review.findOne({
        where: { id: req.params.id },
    });

    console.log("This is review:" + review);

    if (review) {
        try {
            await review.update({
                studentId: req.body.studentId ?? review.studentId,
                tutorId: req.body.tutorId ?? review.tutorId,
                courseId: req.body.courseId ?? review.courseId,
                rating: req.body.rating ?? review.rating,
                reportReviewStatus: req.body.reportReviewStatus,
            });
            res.json(
                new SuccessfulResponse(
                    "Review id " + review.id + " successfully updated",
                    review
                )
            );
        } catch (e) {
            res.json(
                new FailedResponse(
                    "Review id " + review.id + " update failed" + e
                )
            );
        }
    } else {
        res.json(
            new FailedResponse("No review exists with provided review id")
        );
    }
};

module.exports = { getReviews, addReview, reportReview, approvereview };
