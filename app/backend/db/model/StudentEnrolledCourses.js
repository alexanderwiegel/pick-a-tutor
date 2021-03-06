const TutorCourse = require("./TutorCourse");
const User = require("./User");
const db = require("../db");
const { DataTypes, Model } = require("sequelize");

class StudentEnrolledCourses extends Model {}

StudentEnrolledCourses.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        tutorCourseId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: TutorCourse,
                key: "id",
            },
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: "id",
            },
        },
        enrolledStatus: {
            type: DataTypes.BOOLEAN,
        },
    },
    {
        sequelize: db,
        modelName: "StudentEnrolledCourses",
        tableName: "student_enrolled_courses",
        timestamps: true,
        paranoid: true,
    }
);

module.exports = StudentEnrolledCourses;
