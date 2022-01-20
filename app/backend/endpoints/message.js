const Message = require("../db/model/Message");
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;
const jwtdecode = require("jwt-decode");
const db = require("../db/db");
const User = require("../db/model/User");
const { SuccessfulResponse, FailedResponse } = require("../utils/response");

//************* Get List of all messages based on senderID and RecipientId" ***************

const getconversation = async (req, res, next) => {
  //   var token = req.headers["authorization"];
  //   var decoded = jwtdecode(token);
  //   console.log("************decoded:" + decoded.email);
  const messsent = await Message.findAll({
    where: {
      senderId: req.query.senderId,
      recipientId: req.query.recipientId,
    } , include : [{ model: User, as: "sender" },{ model: User, as: "recipient" },]
  });

  const messreceived = await Message.findAll({
    where: {
      senderId: req.query.recipientId,
      recipientId:req.query.senderId ,
    } , include : [{ model: User, as: "sender" },{ model: User, as: "recipient" },]
  });

  res.json({
    success: true,
    message: "All messages between two users",
    records: messsent.length+messreceived.length,
    data: [messsent,messreceived],
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

//************* Get all convesations of a user where he contacted somebody or he has been contacted by others" ***************

const getallconversations = async (req, res, next) => {
    var token = req.headers["authorization"];
    var decoded = jwtdecode(token);

    let messsent = await Message.findAll({
        where: { senderId: decoded.id },
        include: [
          { model: User, as: "sender" },
          { model: User, as: "recipient" },
      ],
    });

    
    let messreceived = await Message.findAll({
      where: { recipientId: decoded.id },
      include: [
          { model: User, as: "sender" },
          { model: User, as: "recipient" },
      ],
  });

    res.json({
        success: true,
        message: "All conversations of a User",
        records: messsent.length+messreceived.length,
        data: [messsent,messreceived],
    });

};

exports.getallconversations = getallconversations;
