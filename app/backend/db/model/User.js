const { DataTypes, Model } = require("sequelize");
const db = require("../db");

class User extends Model {
    static get GENDER() {
        return {
            get MALE() {
                return 0;
            },
            get FEMALE() {
                return 1;
            },
            get DIVERSE() {
                return 2;
            },
        };
    }
}

User.init(
    {
        firstName: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            // allowNull: false,
        },
        rating: {
            type: DataTypes.DECIMAL(4, 2),
        },
        nRatings: {
            type: DataTypes.INTEGER,
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
            defaultValue: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
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
