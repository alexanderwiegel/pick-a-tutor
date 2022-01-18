const Message = require("../db/model/Message");
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;
const jwtdecode = require("jwt-decode");
const db = require("../db/db");
const User = require("../db/model/User");
const { SuccessfulResponse, FailedResponse } = require("../utils/response");

//************* Get List of all messages based on senderID and RecipientId" ***************

const getconversation = async (req, res, next) => {
    const mess = await Message.findAll({
        where: {
            senderId: req.body.senderId,
            recipientId: req.body.recipientId,
        },
    });

    res.json({
        success: true,
        message: "All conversations",
        records: mess.length,
        data: mess,
    });
};

exports.getconversation = getconversation;

//************* Create message ***************

const createmessage = async (req, res, next) => {
    let mess = await Message.findAll({
        where: {
            senderId: req.body.senderId,
            recipientId: req.body.recipientId,
        },
    });

    mess = Message.build({
        senderId: req.body.senderId,
        recipientId: req.body.recipientId,
        message: req.body.message,
    });

    await mess.save().catch((e) => {
        console.log(e);
    });

    res.json({
        success: true,
        message: "Message Saved",
        records: mess.length,
        data: mess,
    });
};

exports.createmessage = createmessage;

//************* Get Last Coversations of a user corresponding to all other he contacted" ***************

// const getallmessages = async (req, res, next) => {
//     var token = req.headers["authorization"];
//     var decoded = jwtdecode(token);

//     let user = await User.findOne({
//         where: { id: decoded.id },
//         include: [
//             { model: Message, as: "sent" },
//             {
//                 model: Message,
//                 as: "received",
//             },
//         ],
//     });

//     res.json(
//         new SuccessfulResponse("Users messages", [user.sent + user.received])
//     );

//     // res.json({
//     //     success: true,
//     //     message: "Users messages",
//     //     records: user.length,
//     //     data: [user.sent + user.received],
//     // });

//     //     console.log("conversations.length:" + conversations.length);

//     //     if (conversations.length == 0) {
//     //         res.json({
//     //             success: true,
//     //             message: "No message to update",
//     //             records: 0,
//     //             // data: message,
//     //         });
//     //     }

//     //     const records = conversations.map(async (message, index) => {
//     //         try {
//     //             await message.update({
//     //                 senderId: message.senderId,
//     //                 recipientId: message.recipientId,
//     //                 conversationId: message.conversationId,
//     //                 isConversationOpen: req.body.isConversationOpen,
//     //             });

//     //             res.json({
//     //                 success: true,
//     //                 message: "Messages Status Updated",
//     //                 records: conversations.length,
//     //                 data: conversations,
//     //             });
//     //         } catch (e) {
//     //             // res.error({
//     //             //     success: false,
//     //             //     message: "Updation failed" + e,
//     //             //     records: 0,
//     //             // });
//     //         }
//     //     });
// };

// exports.getallmessages = getallmessages;
