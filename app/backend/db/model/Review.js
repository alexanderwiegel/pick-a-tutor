const { DataTypes, Model } = require("sequelize");
const db = require("../db");
const User = require("./User");
const TutorCourse = require("./TutorCourse");

class Review extends Model {}

Review.init(
    {
        studentId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: "id",
            },
        },
        tutorId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: "id",
            },
        },
        courseId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: TutorCourse,
                key: "id",
            },
        },
        rating: {
            type: DataTypes.TINYINT,
            allowNull: false,
        },
        ratingComments: {
            type: DataTypes.TEXT,
        },
        reportReview: {
            type: DataTypes.TINYINT,
        },
        reportReviewComments: {
            type: DataTypes.TEXT,
        },
        reportReviewStatus: {
            type: DataTypes.TINYINT,
        },
    },
    {
        sequelize: db,
        modelName: "Review",
        tableName: "reviews",
        timestamps: true,
        paranoid: true,
    }
);

module.exports = Review;
