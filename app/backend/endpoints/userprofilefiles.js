const UserProfileFiles = require("../db/model/UserProfileFiles");
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;
const jwtdecode = require("jwt-decode");
const User = require("../db/model/User")
const fs = require("fs");
const CourseAdditionalInfo = require('../db/model/CourseAdditionalInfo');

// // *************************Upload File*****************************

// const uploadmyfile = async (req, res, next) => {
//     // const title = req.file.filename;
//     // const file = req.file;

//     console.log(req.body.fileTitle);
//     // console.log(title);
//     console.log(req.file.path);
//     // console.log(file);

//     res.json({
//         success: true,
//         message: "Uploaded Files",
//         // records: userprofilefiles.length,
//         // data: userprofilefiles,
//     });
// };

// exports.uploadmyfile = uploadmyfile;

//************* Get List of All profiles based on userId" ***************

const getallbyuserid = async (req, res, next) => {
    const userprofilefiles = await UserProfileFiles.findAll({
        where: { UserId: req.params.userId }, include: [User]
    });

    res.json({
        success: true,
        message: "User Profile Files",
        records: userprofilefiles.length,
        data: userprofilefiles,
    });
};

exports.getallbyuserid = getallbyuserid;

//************* Get specific profile file based on file id(id) " ***************

const getallbyfileid = async (req, res, next) => {
    const userprofilefiles = await UserProfileFiles.findAll({
        where: { id: req.params.fileId }, include: [User]
    });

    res.json({
        success: true,
        message: "User Profile File",
        records: userprofilefiles.length,
        data: userprofilefiles,
    });
};

exports.getallbyfileid = getallbyfileid;

//************* Get all profile file based on file approval status " ***************

const getallbystatus = async (req, res, next) => {
    const userprofilefiles = await UserProfileFiles.findAll({
        where: { approvalStatus: req.params.approvalStatus }, include:[User]
    });

    res.json({
        success: true,
        message: "User Profile Files",
        records: userprofilefiles.length,
        data: userprofilefiles,
    });
};

exports.getallbystatus = getallbystatus;

//************* Get all profile file based on user id and file approval status " ***************

const getallbyuserfilestatus = async (req, res, next) => {
    const userprofilefiles = await UserProfileFiles.findAll({
        where: {
            UserId: req.params.userId,
            fileTitle: req.params.fileTitle,
            approvalStatus: req.params.approvalStatus,
        }, include: [User]
    });

    res.json({
        success: true,
        message: "User Profile File",
        records: userprofilefiles.length,
        data: userprofilefiles,
    });
};

exports.getallbyuserfilestatus = getallbyuserfilestatus;

//************* Create User profile file ***************

const createuserprofilefile = async (req, res, next) => {
    var token = req.headers["authorization"];
    var decoded = jwtdecode(token);

    let profilefile = UserProfileFiles.build({
        UserId: decoded.id,
        fileTitle: req.body.fileTitle,
        filePath: req.file.path,
        approvalStatus: "PendingApproval",
    });

    await profilefile.save().catch((e) => {
        console.log(e);
    });

    res.json({
        success: true,
        message: "Profile File Successfully Saved",
        records: profilefile.length,
        data: profilefile,
    });
};

// const createuserprofilefile = async (req, res, next) => {
//     let profilefile = UserProfileFiles.build({
//         UserId: req.body.userId,
//         fileTitle: req.body.fileTitle,
//         filePath: req.body.filePath,
//         approvalStatus: "PendingApproval",
//     });

//     await profilefile.save().catch((e) => {
//         console.log(e);
//     });

//     res.json({
//         success: true,
//         message: "Profile File Successfully Saved",
//         records: profilefile.length,
//         data: profilefile,
//     });
// };

exports.createuserprofilefile = createuserprofilefile;

//************* Update Existing profile file ***************

const updateuserprofilefile = async (req, res, next) => {
    const userprofilefile = await UserProfileFiles.findOne({
        where: { id: req.params.fileId },
    });

    if (userprofilefile) {
        try {
            await userprofilefile.update({
                UserId: req.body.userId,
                fileTitle: req.body.fileTitle ?? userprofilefile.fileTitle,
                filePath: req.body.filePath ?? userprofilefile.filePath,
                approvalStatus: req.body.approvalStatus,
            });
            res.json({
                success: true,
                message:
                    "User Profile File for user '" +
                    userprofilefile.UserId +
                    "' successfully updated",
                records: userprofilefile.length,
            });
        } catch (e) {
            res.json({
                success: false,
                message:
                    "User Profile File for user " +
                    userprofilefile.UserId +
                    " updation failed",
                records: userprofilefile.length,
            });
        }
    } else {
        res.json({
            success: false,
            message:
                "Provided user profile file id doesn't exist or is already deleted",
        });
    }
};

exports.updateuserprofilefile = updateuserprofilefile;

//************* Delete Existing user profile file ***************

const deleteuserprofilefile = async (req, res, next) => {
    const userprofilefile = await UserProfileFiles.findOne({
        where: { id: req.params.fileId },
    });

    if (userprofilefile) {
        try {
            await userprofilefile.destroy();
            res.json({
                success: true,
                message:
                    "User profile file '" +
                    userprofilefile.id +
                    "' successfully deleted",
                records: userprofilefile.length,
            });
        } catch (e) {
            res.json({
                success: false,
                message:
                    "User profile file " +
                    userprofilefile.id +
                    " deletion failed",
                records: userprofilefile.length,
            });
        }
    } else {
        res.json({
            success: false,
            message:
                "Provided user profile file doesn't exist or is already deleted",
        });
    }
};

exports.deleteuserprofilefile = deleteuserprofilefile;

exports.downloadFile = async (req, res) => {
    let profileFile = await UserProfileFiles.findOne({where: {filePath: req.query.path}});
    if (profileFile === null) {
        profileFile = await CourseAdditionalInfo.findOne({where: {filePath: req.query.path}})
    }
    res.download(profileFile.filePath);
}

