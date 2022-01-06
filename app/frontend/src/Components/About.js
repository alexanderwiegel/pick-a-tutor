import React from "react"

function About(props) {
  return (
    <div id="about">
      <div className="about-image">
        <img src={props.image} alt="" />
      </div>
      <div className="about-text">
        <h2> {props.title} </h2>
        <p>'Pick A Tutor' helps you tailor your tutor to your needs.</p>
        <a href="#" className="cv-btn" style={{ padding: 6 }}>
          {" "}
          {props.button}{" "}
        </a>
      </div>
    </div>
  )
}

export default About
