const { DataTypes, Model } = require("sequelize");
const db = require("../db");

class UserProfile extends Model {}

UserProfile.init(
    {
        UserId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        profileType: {
            type: DataTypes.BOOLEAN,
        },
        isApproved: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false,
        },
        profileImagePath: {
            type: DataTypes.STRING,
        },
        cvPath: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.TEXT,
        },
    },
    {
        sequelize: db,
        modelName: "UserProfile",
        tableName: "user_profiles",
        timestamps: true,
        paranoid: true,
    }
);

module.exports = UserProfile;
