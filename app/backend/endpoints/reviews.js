const Review = require("../db/model/Review");
const { SuccessfulResponse, FailedResponse } = require("../utils/response");

const addReview = async (req, res) => {
    let review = Review.build({
        studentId: req.body.studentId,
        tutorId: req.body.tutorId,
        courseId: req.body.courseId,
        rating: req.body.rating,
        ratingComments: req.body.ratingComments,
    });
    console.log("Created review:" + review);
    res.json(new SuccessfulResponse("Review created", [review]));
};

const reportReview = async (req, res) => {
    let review = await Review.findOne({ where: { id: req.params.id } });
    // TODO
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

module.exports = { addReview, approvereview };
