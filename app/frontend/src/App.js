import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from "./Pages/LandingPage"
import SignUp from "./Pages/SignUp"
import Login from "./Pages/Login"
import PageTemplate from "./Components/PageTemplate"
import Home from "./Pages/Home"
import Browse from "./Pages/Browse"
import CourseDetails from "./Pages/CourseDetails"
import EditCourseDetails from "./Pages/EditCourseDetails"
import AddCourse from "./Pages/AddCourse"
import TutorProfile from "./Pages/TutorProfile"
import EditTutorProfile from "./Pages/EditTutorProfile"
import Users from "./Pages/Users"
import Approvals from "./Pages/Approvals"
import Messages from "./Pages/Messages"
import Chat from "./Pages/Chat"
import ForgotPassword from "./Pages/ForgotPassword"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageTemplate><LandingPage /></ PageTemplate>} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/forgotp" element={<ForgotPassword />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/home" element={<PageTemplate><Home /></PageTemplate>} />
        <Route exact path="/browse" element={<PageTemplate><Browse /></PageTemplate>} />
        <Route exact path="/course/:id" element={<PageTemplate><CourseDetails /></PageTemplate>} />
        <Route exact path="/editCourse/:id" element={<PageTemplate><EditCourseDetails /></PageTemplate>} />
        <Route exact path="/addCourse" element={<PageTemplate><AddCourse /></ PageTemplate>} />
        <Route exact path="/tutor/:id" element={<PageTemplate><TutorProfile /></ PageTemplate>} />
        <Route exact path="/editTutorProfile" element={<PageTemplate><EditTutorProfile /></ PageTemplate>} />
        <Route exact path="/users" element={<PageTemplate><Users /></PageTemplate>} />
        <Route exact path="/approvals" element={<PageTemplate><Approvals /></PageTemplate>} />
        <Route exact path="/messages" element={<PageTemplate><Messages /></PageTemplate>} />
        <Route exact path="/chat" element={<PageTemplate><Chat /></PageTemplate>} />
      </Routes>
    </Router>
  )
}

export default App
