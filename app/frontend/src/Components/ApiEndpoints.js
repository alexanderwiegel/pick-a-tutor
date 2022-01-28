import axios from "axios"

const axiosInstance = axios.create({
  baseURL: "http://20.113.25.17:3001/api",
  headers: { "Authorization": `Bearer ${localStorage.getItem("token")}` }
})

// Interceptors to log requests
/* axiosInstance.interceptors.request.use(
 function (config) {
   console.log("log request " + config.url)
   console.log(config)
   return config
 },
 function (error) {
   // Do something with request error
   return Promise.reject(error)
 }
)  */

async function getTutorData() {
  return await axiosInstance.get("tutors")
}

async function getTutorOfTheMonth() {
  return await axiosInstance.get("tutorofmonth")
}

async function register(data) {
  const gender_val = parseInt(data.gender)
  return await axiosInstance.post("/users", {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: data.password,
    dateOfBirth: data.dateOfBirth,
    gender: gender_val,
    isStudent: data.role === "student" ? true : false,
    isTutor: data.role === "tutor" ? true : false,
    isAdmin: false,
  })
}

async function login(data) {
  return await axiosInstance.post("/login", {
    email: data.email,
    password: data.password,
  })
}

async function getListofTutors(subject) {
  return await axiosInstance.get(`tutors?search=${subject}&tutor_id`)
}

async function getListofCourses(subject) {
  return await axiosInstance.get(`tutor_courses?search=${subject}`)
}

//#region Message APIs
async function getAllConversations() {
  return await axiosInstance.get("/getallconversations")
}

async function getUnreadConversations() {
  return await axiosInstance.get("/getunreadconversation")
}

async function markAsRead(messageId) {
  return await axiosInstance.patch("/updatmessage", {
    messageid: messageId,
    isRead: true
  })
}

async function getHistory(senderId, recipientId) {
  return await axiosInstance.get("/getconversation", {
    params: {
      senderId: senderId,
      recipientId: recipientId,
    },
  })
}

async function sendMessage(senderId, recipientId, message) {
  return await axiosInstance.post("/createmessage", {
    senderId: senderId,
    recipientId: recipientId,
    message: message,
  })
}
//#endregion

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
  return await axiosInstance.patch("/updatecoursefile/" + fileId, {
    approvalStatus: status,
  })
}

async function updateProfileFile(fileId, userId, status) {
  return await axiosInstance.patch("/updateprofilefile/" + fileId, {
    userId: userId,
    approvalStatus: status,
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
  return await axiosInstance.post("enrollstudent", {
    tutorCourseId: courseId,
  })
}

async function getFilteredResult(course, minPrice, maxPrice, rating) {
  return await axiosInstance.get(
    `tutor_courses_home?course_name=${course}&price_min=${minPrice}&price_max=${maxPrice}&rating=${rating}`
  )
}
async function getFilteredTutor(search, rating) {
  return await axiosInstance.get(
    `tutors?search=${search}&rating=${rating}&id=`
  )
}

async function getEnrolledCourses() {
  return await axiosInstance.get("enrolledstudentcourses")
}

async function getCourseDetails(courseID) {
  console.log(`In get course ${courseID} API call.`)
  const allCoursesData = await axiosInstance.get("/tutor_courses")
  const allCourses = allCoursesData.data.data
  // use equality operator == not strict equality operator === because courseID is sent as string
  let course = allCourses.find((course) => course.CourseId == courseID)
  // clean the course json data and make it more structured
  course = Object.assign(course, course.Course)
  delete course.Course
  const tutorID = course.User.id
  const courseFilesData = await axiosInstance.get(
    `/getallbytutorcourse/${tutorID}/${courseID}/`
  )
  course = Object.assign(course, { files: courseFilesData.data.data })
  console.log(course)
  return course
}

async function getTutorCourses(tutorID) {
  console.log("in get tutor courses api call")
  return await axiosInstance.get(`/tutor_courses?tutor_id=${tutorID}`)
}

async function reportReview(reviewID, reportComments) {
  console.log("in report review " + reviewID + " api call" + reportComments)
  return await axiosInstance.patch(`/reviews/${reviewID}/report`, {
    reportComments: reportComments,
  })
}
async function getCourseReviews(courseID) {
  // console.log("in get courses reviews api call")
  const respone = await axiosInstance.get(`/reviews?courseId=${courseID}`)
  // console.log(respone)
  return respone
}

async function getTutorProfile(tutorID) {
  console.log("in get tutor profile api call")
  const tutorData = await axiosInstance.get(
    `/tutors?search=&tutor_id=${tutorID}`
  )
  const tutorFilesData = await axiosInstance.get(
    `/getallprofilefilesbyuserid/${tutorID}`
  )
  /* console.log(tutorData)
  console.log(tutorFilesData)
  console.log(Object.assign(tutorData.data.data[0], {files: tutorFilesData.data.data})) */
  // To Do: search how to return multiple objects so I could return the tutorData and tutorFilesData promise object as is to the caller function so if there is an error, it could be handled there
  return Object.assign(tutorData.data.data[0], {
    files: tutorFilesData.data.data,
  })
}

async function getTutorById(id) {
  return await axiosInstance.get("/tutors", {
    params: {
      tutor_id: id
    }
  })
}

async function getTutorFiles(tutorID) {
  console.log("in get tutor files api call")
  return await axiosInstance.get(`/getallprofilefilesbyuserid/${tutorID}`)
}

async function addCourseReview(review) {
  return await axiosInstance.post("/reviews", {
    studentId: review.writerID,
    tutorId: review.courseTutorID,
    courseId: review.courseID,
    rating: review.rating,
    ratingComments: review.text,
  })
}

async function addNewCourse(course) {
  // To Do: check later how to add an image and files with the request, read https://stackoverflow.com/questions/43013858/how-to-post-a-file-from-a-form-with-axios
  const response = await axiosInstance.post("/tutor_course", {
    name: course.name,
    description: course.description,
    coursePricePerHour: course.coursePricePerHour,
    isFull: false,
  })

  console.log('In add new course api call')
  console.log(response)

  const courseID = response.data.data.CourseId

  Promise.all(course.files && course.files?.map((file) => addCourseFile(courseID, file))).then(function (
    results
  ) { console.log("after trying to add all files, result = ", results) })

  return response
}

async function addCourseFile(courseID, file) {
  const config = {
    baseURL: "http://20.113.25.17:3001/api",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "multipart/form-data",
    },
  }
  var formData = new FormData()
  formData.append("file", file, file.name)
  formData.append("fileTitle", file.name)
  formData.append("courseId", courseID)
  const response = await axiosInstance.post("createcoursefile", formData, config)
  console.log("api call upload file " + file.name)
  console.log(response)
  return response;
}

async function updateCourseDetails(courseID, formData) {
  console.log("in api call updateCourseDetails, the values passed are courseID =", courseID, " and formData =", formData)
  if (formData.files) {
    Promise.all(formData.files.map((file) => addCourseFile(courseID, file)))
      .then(function (results) {
        console.log("all files uploaded")
        console.log(results)
      })
  }

  const requestBody = {}
  if (formData.coursePricePerHour)
    requestBody.coursePricePerHour = formData.coursePricePerHour
  if (formData.isFull)
    requestBody.isFull = formData.isFull
  if (formData.name)
    requestBody.name = formData.name
  if (formData.description)
    requestBody.description = formData.description

  const response = await axiosInstance.patch(`/tutor_course/${courseID}`, requestBody)
  return response;
}

async function deleteCourseFile(fileID) {
  console.log('in delete course file api call')
  const response = await axiosInstance.delete(`/deletecoursefile/${fileID}`)
  console.log(response)
  return response;
}

async function addTutorFile(file) {
  const config = {
    baseURL: "http://20.113.25.17:3001/api",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "multipart/form-data",
    },
  }
  var formData = new FormData()
  formData.append("file", file, file.name)
  formData.append("fileTitle", file.name)
  const response = await axiosInstance.post("createprofilefile", formData, config)
  console.log("api call upload file " + file.name)
  console.log(response)
  return response;
}

async function deleteTutorFile(fileID) {
  console.log('in delete course file api call')
  const response = await axiosInstance.delete(`/deleteuserprofilefile/${fileID}`)
  console.log(response)
  return response;
}

async function updateTutorProfile(tutorEmail, formData) {
  if (formData.files) {
    Promise.all(formData.files.map((file) => addTutorFile(file)))
      .then(function (results) {
        console.log("all files uploaded")
        console.log(results)
      })
  }

  const requestBody = {}
  if (formData.firstName)
    requestBody.firstName = formData.firstName
  if (formData.lastName)
    requestBody.lastName = formData.lastName
  if (formData.description)
    requestBody.description = formData.description
  if (formData.gender)
    requestBody.gender = formData.gender

  const response = await axiosInstance.patch(`/tutors/${tutorEmail}`, requestBody)
  return response;
}




const apiEndPoints = {
  getTutorData,
  getTutorOfTheMonth,
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
  getUnreadConversations,
  markAsRead,
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
  getTutorById,
  getCourseReviews,
  getTutorFiles,
  addCourseReview,
  addNewCourse,
  addCourseFile,
  getFilteredTutor,
  updateCourseDetails,
  deleteCourseFile,
  addTutorFile,
  deleteTutorFile,
  updateTutorProfile,
}

export default apiEndPoints
