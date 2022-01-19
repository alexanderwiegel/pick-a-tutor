const { DataTypes, Model } = require("sequelize");
const db = require("../db");
const User = require("./User");

class UserProfileFiles extends Model {}

UserProfileFiles.init(
    {
        userId: {
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
        modelName: "UserProfileFiles",
        tableName: "user_profile_files",
        timestamps: true,
        paranoid: true,
    }
);

module.exports = UserProfileFiles;
