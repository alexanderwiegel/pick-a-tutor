const {DataTypes, Model} = require('sequelize');
const db = require('../db');

class User extends Model {
    static async asJson() {
        let users = await this.findAll();
        return JSON.parse(JSON.stringify(users));
    }
}

User.init({
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    emailVerifiedAt: {
        type: DataTypes.DATE,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dateOfBirth: {
        type: DataTypes.DATEONLY
    },
    gender: {
        type: DataTypes.BOOLEAN
    },
    isStudent: {
        type: DataTypes.BOOLEAN
    },
    isTutor: {
        type: DataTypes.BOOLEAN
    },
    isAdmin: {
        type: DataTypes.BOOLEAN
    },
    mobileCountryCode: {
        type: DataTypes.STRING
    },
    mobileNumber: {
        type: DataTypes.STRING
    },
    houseNumber: {
        type: DataTypes.STRING
    },
    streetName: {
        type: DataTypes.STRING
    },
    city: {
        type: DataTypes.STRING
    },
    country: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.STRING
    },
    confirmationCode: {
        type: DataTypes.INTEGER
    }
}, {
    sequelize: db,
    modelName: 'User',
    tableName: 'users'
});

module.exports = User;
