const Message = require("../db/model/Message");
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;
const jwtdecode = require("jwt-decode");
const db = require("../db/db");
const User = require("../db/model/User");
const { SuccessfulResponse, FailedResponse } = require("../utils/response");

//************* Get List of all messages based on senderID and RecipientId last message of them as ARRAY " ***************

const getconversation = async (req, res, next) => {
  //   var token = req.headers["authorization"];
  //   var decoded = jwtdecode(token);
  //   console.log("************decoded:" + decoded.email);
  // const messsent = await Message.findAll({
  //   where: {
  //     senderId: req.query.senderId,
  //     recipientId: req.query.recipientId,
  //   } , include : [{ model: User, as: "sender" },{ model: User, as: "recipient" },]
  // });

  // const messreceived = await Message.findAll({
  //   where: {
  //     senderId: req.query.recipientId,
  //     recipientId:req.query.senderId ,
  //   } , include : [{ model: User, as: "sender" },{ model: User, as: "recipient" },]
  // });

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
    data: messsent.concat(messreceived),
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
    isRead:false,
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

    const [latestmessages, meta] = await db.query(
      "select senderId,recipientId,max(max_id) as latest_id from (select senderId,recipientId, max(id)  as max_id from db.messages where senderId=$Id group by senderId,recipientId union select senderId,recipientId,max_id from ( select senderId as 'recipientId',recipientId as 'senderId',max_id from ( select senderId,recipientId, max(id) as max_id from db.messages where recipientId=$Id group by senderId,recipientId) as temp) as temp2) as final_temp group by senderId,recipientId;",
      // "select senderId,recipientId,max(max_id) as latest_id from (select senderId,recipientId, max(id)  as max_id from dbgdsd.messages where senderId=$Id group by senderId,recipientId union select senderId,recipientId,max_id from ( select senderId as 'recipientId',recipientId as 'senderId',max_id from ( select senderId,recipientId, max(id) as max_id from dbgdsd.messages where recipientId=$Id group by senderId,recipientId) as temp) as temp2) as final_temp group by senderId,recipientId;",
      {
          bind: { Id: decoded.id },
      }
  );

  let latestids=[]

  latestmessages.map((msg,index) => {
    // console.log(msg.latest_id)
    latestids.push(msg.latest_id)
  })

    
      let allmessages = await Message.findAll({
        where: {id : latestids},
        include: [
          { model: User, as: "sender" },
          { model: User, as: "recipient" },
      ],
    });

    let allmessagesarray= []
    allmessages.map((arraymessage,index)=> {
      allmessagesarray.push([arraymessage])
    })


    // let allmessages = await Message.findAll({
    //     // where: { senderId: decoded.id },
    //     where: { [Op.or]: [ {senderId: decoded.id}, {recipientId: decoded.id} ]},
    //   //   include: [
    //   //     { model: User, as: "sender" },
    //   //     { model: User, as: "recipient" },
    //   // ],
    // });


    
  //   let messreceived = await Message.findAll({
  //     where: { recipientId: decoded.id },
  //     include: [
  //         { model: User, as: "sender" },
  //         { model: User, as: "recipient" },
  //     ],
  // });

  // let allmessages= messsent.concat(messreceived)

    res.json({
        success: true,
        message: "All conversations of a User",
        records: allmessagesarray.length,
        // data: [messsent,messreceived],
        // data: messsent.concat(messreceived),
        data: allmessagesarray
    });

};

exports.getallconversations = getallconversations;


//************* Get List of all messages based on senderID and RecipientId last message of them as ARRAY " ***************

const getunreadconversation = async (req, res, next) => {

  var token = req.headers["authorization"];
  var decoded = jwtdecode(token);

  const messs = await Message.findAll({
    where: {
      recipientId: decoded.id,
      isRead: false
    } 
  });


  res.json({
    success: true,
    message: "All unread messages received by the user",
    records: messs.length,
    data: messs,
  });
};

exports.getunreadconversation = getunreadconversation;

//************* Update Existing message using message id ***************

const updatmessage = async (req, res, next) => {
  let mess = await Message.findOne({
    where: {
      id: req.body.messageid,
    },
  });

  if (mess) {
    try {
      await mess.update({
        senderId: mess.senderId,
        recipientId: mess.recipientId,
        message: mess.message,
        isRead: req.body.isRead,
      });
      res.json({
        success: true,
        message: "Message isRead status updated successfully",
        records: mess.length,
        data: mess,
      });
    } catch (e) {
      res.json({
        success: false,
        message: "Message isRead status update failed",
        records: 0,
      });
    }
  } else {
    res.json({
      success: false,
      message: "Message id doesn't exist or is already deleted",
    });
  }
};

exports.updatmessage = updatmessage;
