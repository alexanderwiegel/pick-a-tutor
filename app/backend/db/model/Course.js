const {DataTypes, Model} = require('sequelize');
const db = require('../db');

class Course extends Model {
}

Course.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, {
    sequelize: db,
    modelName: 'Course',
    tableName: 'courses',
    timestamps: true,
    paranoid: true
});

module.exports = Course;
