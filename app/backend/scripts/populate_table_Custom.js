const Course = require("../db/model/Course");
const Message = require("../db/model/Message");
const TutorCourse = require("../db/model/TutorCourse");
const User = require("../db/model/User");
const UserProfile = require("../db/model/UserProfile");

const db = require("../db/db");

require("../db/associations");

async function run() {
    // Recreate tables
    await db.sync({ force: true });

    await User.build({
        userId: 1,
        fileTitle: "Image",
        filePath: "/userdirectory/1/",
        approvalStatus: "PendingApproval",
    }).save();

    /* Example of getting messages for the user
    let user = await User.findOne({
        include: [
            UserProfile,
            { model: Message, as: "sent" },
            {
                model: Message,
                as: "received",
            },
        ],
    });
    let message = await Message.findOne({
        include: [
            { model: User, as: "sender" },
            { model: User, as: "recipient" },
        ],
    }); */

    /* Example of soft-delete:
    let user = await User.findOne({where: {firstName: 'John'}});
    await user.destroy(); */
}

run().then(() => console.log("Database tables were recreated"));
