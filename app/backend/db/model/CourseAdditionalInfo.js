const { DataTypes, Model } = require("sequelize");
const db = require("../db");
const Course = require("./Course")
const User = require("./User")

class CourseAdditionalInfo extends Model {}

CourseAdditionalInfo.init(
    {
        courseId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Course,
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
        fileTitle: {
            type: DataTypes.STRING,
        },
        filePath: {
            type: DataTypes.STRING,
        },
        approvalStatus: {
            type: DataTypes.STRING, //  Possible Values: PendingApproval, Approved, Rejected
            defaultValue: 1,
            allowNull: false,
        },
    },
    {
        sequelize: db,
        modelName: "CourseAdditionalInfo",
        tableName: "course_additional_info",
        timestamps: true,
        paranoid: true,
    }
);

module.exports = CourseAdditionalInfo;
