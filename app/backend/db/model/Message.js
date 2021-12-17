const { DataTypes, Model } = require("sequelize");
const db = require("../db");
const User = require("./User");

class Message extends Model {}

Message.init(
    {
        senderId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: "id",
            },
        },
        recipientId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: "id",
            },
        },
        message: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize: db,
        modelName: "Message",
        tableName: "messages",
        timestamps: true,
        paranoid: true,
    }
);

module.exports = Message;
