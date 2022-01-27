import React, { useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import CourseDetailsForm from "../Components/CourseDetailsForm"
import apiEndPoints from "../Components/ApiEndpoints"

function AddCourse() {
  const [courseDetails, setCourseDetails] = useState(null)

  const getTutorProfile = async (tutorID) => {
    const tutorProfile = await apiEndPoints.getTutorProfile(tutorID)
    setCourseDetails({ User: tutorProfile })
  }

  useEffect(() => {
    const courseTutorID = localStorage.getItem("userID")
    getTutorProfile(courseTutorID)
  }, [])

  return (
    courseDetails && (
      <CourseDetailsForm isNewCourse={true} courseDetails={courseDetails} />
    )
  )
}

export default AddCourse;