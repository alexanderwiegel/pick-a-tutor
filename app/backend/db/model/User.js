const { DataTypes, Model } = require("sequelize");
const db = require("../db");

class User extends Model {}

User.init(
    {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dateOfBirth: {
            type: DataTypes.DATEONLY,
        },
        gender: {
            type: DataTypes.BOOLEAN,
        },
        isStudent: {
            type: DataTypes.BOOLEAN,
        },
        isTutor: {
            type: DataTypes.BOOLEAN,
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
        },
        status: {
            type: DataTypes.BOOLEAN,
        },
    },
    {
        sequelize: db,
        modelName: "User",
        tableName: "users",
        timestamps: true,
        paranoid: true,
    }
);

module.exports = User;