import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:3001/api",
  headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
})

// async function getTutorData(course, star) {
//     return await axiosInstance.get(`users/${course}/${star}`)
// }

async function getTutorData() {
  return await axiosInstance.get(`tutors`)
}

async function register(data) {
  const gender_val = parseInt(data.gender)
  return await axiosInstance.post(`/users`, {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: data.password,
    dateOfBirth: data.dateOfBirth,
    gender: gender_val,
    isStudent: data.role === "student" ? true : false,
    isTutor: data.role === "tutor" ? true : false,
    isAdmin: false
  })
}

async function login(data) {
  return await axiosInstance.post(`/login`, {
    email: data.email,
    password: data.password
  })
}

async function getListofTutors(subject) {
  return await axiosInstance.get(`tutors?search=${subject}`)
}

async function getListofCourses(subject) {
  return await axiosInstance.get(`tutor_courses?search=${subject}`)
}

async function getAllConversations() {
  return await axiosInstance.get("/getallconversations")
}

async function getHistory(senderId, recipientId) {
  return await axiosInstance.get("/getconversation", {
    params: {
      senderId: senderId,
      recipientId: recipientId
    }
  })
}

async function sendMessage(senderId, recipientId, message) {
  return await axiosInstance.post("/createmessage", {
    senderId: senderId,
    recipientId: recipientId,
    message: message
  })
}

//#region Admin APIs

async function getAllUsers() {
  return await axiosInstance.get("users")
}

async function blockUser(userEmail) {
  return await axiosInstance.delete("users/" + userEmail)
}

async function getProfileFilesToApprove() {
  return await axiosInstance.get("/getallprofilefilesbystatus/PendingApproval")
}

async function getCourseFilesToApprove() {
  return await axiosInstance.get("/getallcoursefilesbystatus/PendingApproval")
}

async function updateCourseFile(fileId, status) {
  return await axiosInstance.patch("/updatecoursefile/" + fileId,
    { approvalStatus: status })
}

async function updateProfileFile(fileId, userId, status) {
  return await axiosInstance.patch("/updateprofilefile/" + fileId,
    {
      userId: userId,
      approvalStatus: status
    })
}

async function getReportedReviews() {
  return await axiosInstance.get("/reported_reviews")
}

async function deleteReview(reviewId) {
  return await axiosInstance.delete("/deleteReview/" + reviewId)
}

async function rejectReport(reviewId) {
  return await axiosInstance.patch("/approvereview/" + reviewId)
}

//#endregion

async function requestEnrollment(courseId) {
  return await axiosInstance.post('enrollstudent', {
    tutorCourseId: courseId
  })
}

async function getFilteredResult(course, minPrice, maxPrice, rating) {
  return await axiosInstance.get(`tutor_courses_home?course_name=${course}&price_min=${minPrice}&price_max=${maxPrice}&rating=${rating}`)
}

async function getEnrolledCourses() {
  return await axiosInstance.get('enrolledstudentcourses')
}

async function getCourseDetails(courseID) {
  console.log("in get tutor courses api call");
  const response = await axiosInstance.get(
      `/tutor_courses?tutor_id=${courseID}`
  );
  console.log(response);
  return response;
}

async function getTutorCourses(tutorID) {
  console.log("in get tutor courses api call");
  return await axiosInstance.get(`/tutor_courses?tutor_id=${tutorID}`);
}

async function reportReview(reviewID, reportComments) {
  console.log("in report review " + reviewID + " api call" + reportComments);
  return await axiosInstance.patch(`/reviews/${reviewID}/report`, {
      reportComments: reportComments,
  });
}
async function getCourseReviews(courseID) {
  console.log("in get courses reviews api call");
  const respone = await axiosInstance.get(`/reviews?courseId=${courseID}`);
  console.log(respone);
  return respone;
}

async function getTutorProfile(tutorID) {
  console.log("in get tutor profile api call");
  return await axiosInstance.get(`/tutors?search=&tutor_id=${tutorID}`);
}
const apiEndPoints = {
  getTutorData,
  getListofTutors,
  register,
  login,
  getHistory,
  sendMessage,
  getListofCourses,
  getFilteredResult,
  requestEnrollment,
  getEnrolledCourses,
  getAllConversations,
  getAllUsers,
  blockUser,
  getProfileFilesToApprove,
  getCourseFilesToApprove,
  updateCourseFile,
  updateProfileFile,
  getReportedReviews,
  deleteReview,
  rejectReport,
  getCourseDetails,
  getTutorCourses,
  reportReview,
  getTutorProfile,
  getCourseReviews,
}

export default apiEndPoints