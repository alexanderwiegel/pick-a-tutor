const CourseAdditionalInfo = require("../db/model/CourseAdditionalInfo");
const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;
const jwtdecode = require("jwt-decode");

//************* Get List of All course files based on tutorId and courseId" ***************

const getallbyTutorCourse = async (req, res, next) => {
    const courseadditionalinfo = await CourseAdditionalInfo.findAll({
        where: { tutorId: req.params.tutorId, courseId: req.params.courseId },
    });

    res.json({
        success: true,
        message: "Course Files",
        records: courseadditionalinfo.length,
        data: courseadditionalinfo,
    });
};

exports.getallbyTutorCourse = getallbyTutorCourse;

//************* Get specific course file based on file id(id) " ***************

const getallbyfileid = async (req, res, next) => {
    const courseadditionalinfo = await CourseAdditionalInfo.findAll({
        where: { id: req.params.fileId },
    });

    res.json({
        success: true,
        message: "Course File",
        records: courseadditionalinfo.length,
        data: courseadditionalinfo,
    });
};

exports.getallbyfileid = getallbyfileid;

//************* Get all course files based on file approval status " ***************

const getallbystatus = async (req, res, next) => {
    const courseadditionalinfo = await CourseAdditionalInfo.findAll({
        where: { approvalStatus: req.params.approvalStatus },
    });

    res.json({
        success: true,
        message: "Course Files",
        records: courseadditionalinfo.length,
        data: courseadditionalinfo,
    });
};

exports.getallbystatus = getallbystatus;

//************* Get all course file based on TutorId " ***************

const getallbytutor = async (req, res, next) => {
    var token = req.headers["authorization"];
    var decoded = jwtdecode(token);
    var tutorId = decoded.id;

    const courseadditionalinfo = await CourseAdditionalInfo.findAll({
        where: {
            tutorId: tutorId,
        },
    });

    res.json({
        success: true,
        message: "Course Files",
        records: courseadditionalinfo.length,
        data: courseadditionalinfo,
    });
};

exports.getallbytutor = getallbytutor;

//************* Create course file ***************

const createusercoursefile = async (req, res, next) => {
    var token = req.headers["authorization"];
    var decoded = jwtdecode(token);
    var tutorId = decoded.id;

    let coursefile = CourseAdditionalInfo.build({
        tutorId: tutorId,
        courseId: req.body.courseId,
        fileTitle: req.body.fileTitle,
        filePath: req.file.path,
        approvalStatus: "PendingApproval",
    });

    await coursefile.save().catch((e) => {
        console.log(e);
    });

    res.json({
        success: true,
        message: "Course File Successfully Saved",
        records: coursefile.length,
        data: coursefile,
    });
};

// const createusercoursefile = async (req, res, next) => {
//     var token = req.headers["authorization"];
//     var decoded = jwtdecode(token);
//     var tutorId = decoded.id;

//     let coursefile = CourseAdditionalInfo.build({
//         tutorId: tutorId,
//         courseId: req.body.courseId,
//         fileTitle: req.body.fileTitle,
//         filePath: req.body.filePath,
//         approvalStatus: "PendingApproval",
//     });

//     await coursefile.save().catch((e) => {
//         console.log(e);
//     });

//     res.json({
//         success: true,
//         message: "Course File Successfully Saved",
//         records: coursefile.length,
//         data: coursefile,
//     });
// };

exports.createusercoursefile = createusercoursefile;

//************* Update Existing course file with file id ***************

const updatcoursefile = async (req, res, next) => {
    const usercoursefile = await CourseAdditionalInfo.findOne({
        where: { id: req.params.fileId },
    });

    if (usercoursefile) {
        try {
            await usercoursefile.update({
                fileTitle: req.body.fileTitle ?? usercoursefile.fileTitle,
                filePath: req.body.filePath ?? usercoursefile.filePath,
                approvalStatus: req.body.approvalStatus,
            });
            res.json({
                success: true,
                message:
                    "Course Profile File '" +
                    usercoursefile.tutorId +
                    "' successfully updated",
                records: usercoursefile.length,
            });
        } catch (e) {
            res.json({
                success: false,
                message:
                    "Course Profile File " +
                    usercoursefile.tutorId +
                    " updation failed",
                records: usercoursefile.length,
            });
        }
    } else {
        res.json({
            success: false,
            message:
                "Provided course file id doesn't exist or is already deleted",
        });
    }
};

exports.updatcoursefile = updatcoursefile;

//************* Delete Existing course file ***************

const deletecoursefile = async (req, res, next) => {
    const usercoursefile = await CourseAdditionalInfo.findOne({
        where: { id: req.params.fileId },
    });

    if (usercoursefile) {
        try {
            await usercoursefile.destroy();
            res.json({
                success: true,
                message:
                    "Course profile file '" +
                    usercoursefile.id +
                    "' successfully deleted",
                records: usercoursefile.length,
            });
        } catch (e) {
            res.json({
                success: false,
                message:
                    "Course profile file " +
                    usercoursefile.id +
                    " deletion failed",
                records: usercoursefile.length,
            });
        }
    } else {
        res.json({
            success: false,
            message: "Provided Course file doesn't exist or is already deleted",
        });
    }
};

exports.deletecoursefile = deletecoursefile;
