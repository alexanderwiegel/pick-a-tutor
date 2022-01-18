const Message = require("../db/model/Message");
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;
const jwtdecode = require("jwt-decode");
const db = require("../db/db");

//************* Get List of all messages based on senderID and RecipientId" ***************

const getallconversations = async (req, res, next) => {
    const conversations = await Message.findAll({
        where: {
            senderId: req.body.senderId,
            recipientId: req.body.recipientId,
        },
    });

    res.json({
        success: true,
        message: "All conversations",
        records: conversations.length,
        data: conversations,
    });
};

exports.getallconversations = getallconversations;

//************* Create message ***************

const createmessage = async (req, res, next) => {
    let conversation = await Message.findAll({
        where: {
            senderId: req.body.senderId,
            recipientId: req.body.recipientId,
            isConversationOpen: true,
        },
    });

    const [maxConversation, meta] = await db.query(
        "select ifnull(max(id),0) as maxconversationid from messages;"
    );

    let conversationId = conversation.conversationId;

    console.log(conversation);
    // console.log(
    //     "conversation.conversationId:" + conversation[0].conversationId
    // );

    console.log(
        "***************+maxConversation:" +
            (await maxConversation[0].maxconversationid)
    );

    if (conversation.length == 0) {
        conversationId = (await maxConversation[0].maxconversationid) + 1;
    } else {
        conversationId = conversation[0].conversationId;
    }

    let message = Message.build({
        senderId: req.body.senderId,
        recipientId: req.body.recipientId,
        conversationId: await conversationId,
        isConversationOpen: true,
        message: req.body.message,
    });

    await message.save().catch((e) => {
        console.log(e);
    });

    res.json({
        success: true,
        message: "Message Saved",
        records: message.length,
        data: message,
    });
};

exports.createmessage = createmessage;

//************* Update Conversation Status" ***************

const updateconversationstatus = async (req, res, next) => {
    const conversations = await Message.findAll({
        where: {
            senderId: req.body.senderId,
            recipientId: req.body.recipientId,
            isConversationOpen: true,
        },
    });

    console.log("conversations.length:" + conversations.length);

    if (conversations.length == 0) {
        res.json({
            success: true,
            message: "No message to update",
            records: 0,
            // data: message,
        });
    }

    const records = conversations.map(async (message, index) => {
        try {
            await message.update({
                senderId: message.senderId,
                recipientId: message.recipientId,
                conversationId: message.conversationId,
                isConversationOpen: req.body.isConversationOpen,
            });

            res.json({
                success: true,
                message: "Messages Status Updated",
                records: conversations.length,
                data: conversations,
            });
        } catch (e) {
            // res.error({
            //     success: false,
            //     message: "Updation failed" + e,
            //     records: 0,
            // });
        }
    });
};

exports.updateconversationstatus = updateconversationstatus;
