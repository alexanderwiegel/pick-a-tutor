const {DataTypes, Model} = require('sequelize');
const db = require('../db');

class TutorCourse extends Model {
}

TutorCourse.init({
    courseId: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    userId: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    coursePricePerHour: {
        type: DataTypes.DECIMAL(4, 2)
    },
    isFull: {
        type: DataTypes.BOOLEAN
    }
}, {
    sequelize: db,
    modelName: 'TutorCourse',
    tableName: 'tutor_courses',
    timestamps: true,
    paranoid: true
});

module.exports = TutorCourse;
