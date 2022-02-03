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
        // conversationId: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
        // isConversationOpen: {
        //     type: DataTypes.BOOLEAN,
        //     allowNull: false,
        // },
        message: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isRead: {
            type: DataTypes.BOOLEAN,
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
