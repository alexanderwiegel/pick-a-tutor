const { DataTypes, Model } = require("sequelize");
const db = require("../db");

class CourseAdditionalInfo extends Model {}

CourseAdditionalInfo.init(
    {
        courseId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        tutorId: {
            type: DataTypes.INTEGER,
            allowNull: false,
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
