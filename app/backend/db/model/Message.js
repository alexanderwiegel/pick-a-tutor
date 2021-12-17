const { DataTypes, Model } = require("sequelize");
const db = require("../db");

class Message extends Model {}

Message.init(
    {
        senderId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        recipientId: {
            type: DataTypes.INTEGER,
            allowNull: false,
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
