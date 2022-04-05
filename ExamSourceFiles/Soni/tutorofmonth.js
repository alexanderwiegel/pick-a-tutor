/*
* tutorofmonth : Method used for to calculate and get details of the tutor of the month.
* @member of {tutorofmonth}
* @returns {} Tutor of the month.
* @Author {Chahat Soni}
*/

const Review = require("../db/model/Review");
const db = require("../db/db");
const CourseAdditionalInfo = require("../db/model/CourseAdditionalInfo");
const TutorCourse = require("../db/model/TutorCourse");


//************* Calculate tutor of the month ***************

// Logic:
// Get all reviews between last 8th and last 4th Week grouped by tutorid and CourseAdditionalInfo.
// Consider tutor who has got maximum average rating for only those TutorCourses where the total review count is > than 5 (hardcoded value)

const tutorofmonth = async (req, res, next) => {
  const [totoalreviews, meta] = await db.query(
    //"select * from (SELECT tutorId, courseId, count(id) as rating_count, truncate(avg(rating),0) as rating_avg  FROM reviews WHERE DATE(createdAt) BETWEEN DATE(CURRENT_DATE() - INTERVAL 8 WEEK) AND DATE(CURRENT_DATE() - INTERVAL 4 WEEK) group by tutorId,courseId   having rating_count >=0 order by rating_avg limit 1) AA,(SELECT d.id as userID,c.id as courseId, b.id as tutorId, d.firstName,d.lastName,c.name as courseName,c.description as courseDescription, b.coursePricePerHour, b.createdAt as courseCreatedAt FROM tutor_courses b,courses c, users d  where b.CourseId=c.id and b.userId=d.id) BB where AA.tutorId=BB.tutorId and AA.courseId=BB.courseId;"
    //Query fixed
    "select * from (SELECT tutorId, courseId, count(id) as rating_count, truncate(avg(rating),0) as rating_avg  FROM reviews WHERE DATE(createdAt) BETWEEN DATE(CURRENT_DATE() - INTERVAL 8 WEEK) AND DATE(CURRENT_DATE() - INTERVAL 4 WEEK) group by tutorId,courseId   having rating_count >=0 order by rating_avg desc limit 1) AA,(SELECT d.id as userID,c.id as courseId, b.UserId as tutorId, d.firstName,d.lastName,c.name as courseName,c.description as courseDescription, b.coursePricePerHour, b.createdAt as courseCreatedAt FROM tutor_courses b,courses c, users d  where b.CourseId=c.id and b.userId=d.id) BB where AA.tutorId=BB.tutorId and AA.courseId=BB.courseId;"
  );

  console.log("******" + (await totoalreviews));

  const tutorOfMonth = [];

  const tutor = res.json({
    success: true,
    message: "Tutor of the month",
    records: tutorOfMonth.length,
    data: totoalreviews,
  });
};

exports.tutorofmonth = tutorofmonth;