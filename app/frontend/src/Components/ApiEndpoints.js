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

async function getAllUsers() {
  return await axiosInstance.get("users")
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

async function getProfileFilesToApprove() {
  return await axiosInstance.get("/getallprofilefilesbystatus/PendingApproval")
}

async function getCourseFilesToApprove() {
  return await axiosInstance.get("/getallcoursefilesbystatus/PendingApproval")
}

async function getReportedReviews() {
  return await axiosInstance.get("/reported_reviews")
}

async function approveFile(fileId) {
  return await axiosInstance.get("/")
}

async function rejectFile(fileId) {
  return await axiosInstance.get("/")
}

async function deleteReview(reviewId) {
  return await axiosInstance.get("/deleteReview/" + reviewId)
}

// async function rejectReport() {
//   return await axiosInstance.get("/")
// }

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

const apiEndPoints = {
  getTutorData,
  getListofTutors,
  register,
  login,
  getAllUsers,
  getHistory,
  sendMessage,
  getListofCourses,
  getFilteredResult,
  requestEnrollment,
  getEnrolledCourses,
  getAllConversations, getProfileFilesToApprove, getCourseFilesToApprove, getReportedReviews, deleteReview
}

export default apiEndPoints