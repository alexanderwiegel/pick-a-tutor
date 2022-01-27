const Course = require("./Course");
const User = require("./User");
const db = require("../db");
const { DataTypes, Model } = require("sequelize");

class TutorCourse extends Model {}

TutorCourse.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        UserId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: "id",
            },
        },
        CourseId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Course,
                key: "id",
            },
        },
        coursePricePerHour: {
            type: DataTypes.DECIMAL(4, 2),
        },
        rating: {
            type: DataTypes.DECIMAL(4, 2),
        },
        nRatings: {
            type: DataTypes.INTEGER,
        },
        isFull: {
            type: DataTypes.BOOLEAN,
        },
    },
    {
        sequelize: db,
        modelName: "TutorCourse",
        tableName: "tutor_courses",
        timestamps: true,
        paranoid: true,
    }
);

module.exports = TutorCourse;
