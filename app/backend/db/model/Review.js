const {DataTypes, Model} = require("sequelize");
const db = require("../db");
const User = require("./User");
const TutorCourse = require("./TutorCourse");

class Review extends Model {
    static NOT_REPORTED = 0;
    static REPORTED = 1;
}

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
            defaultValue: this.NOT_REPORTED,
        },
        reportReviewComments: {
            type: DataTypes.TEXT,
            defaultValue: "",
        },
        reporterId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: "id",
            },
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
