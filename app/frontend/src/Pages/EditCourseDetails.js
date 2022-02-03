import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useParams } from "react-router-dom";
import apiEndPoints from "../Components/ApiEndpoints";
import CourseDetailsForm from "../Components/CourseDetailsForm";

function EditCourseDetails() {
  const [courseDetails, setCourseDetails] = useState(null);
  const { id } = useParams();
  const getCourseDetails = async (courseID) => {
    const courseDetails = await apiEndPoints.getCourseDetails(courseID);
    setCourseDetails(courseDetails);
  };

  useEffect(() => {
    getCourseDetails(id);
  }, []);

  return (
    courseDetails && (
      <CourseDetailsForm isNewCourse={false} courseDetails={courseDetails} />
    )
  );
}

export default EditCourseDetails;