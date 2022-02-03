import React from "react"

function About(props) {
  return (
    <div id="about" >
      <div className="about-image" >
        <img src={props.image} alt="" />
      </div>
      <div className="about-text" >
        <h2> {props.title} </h2>
        <p>Instructors from around Fulda find hundered of students on Pick-A-Tutor. We provide the tools and skills to connect you to the students you want to help.</p>
        <a href="/signup" className="cv-btn" style={{ padding: 6, textDecoration: "none" }}> {props.button} </a>
      </div>
    </div>
  )
}

export default About