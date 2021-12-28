const Review = require("../db/model/Review");

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
            res.json({
                success: true,
                message: "Review id " + review.id + " successfully updated",
                records: review.length,
            });
        } catch (e) {
            res.json({
                success: false,
                message: "Review id " + review.id + " updation failed" + e,
                records: review.length,
            });
        }
    } else {
        res.json({
            success: false,
            message: "No review exists with provided review id",
        });
    }
};

exports.approvereview = approvereview;
