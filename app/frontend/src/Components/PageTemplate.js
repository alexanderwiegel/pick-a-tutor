import React from "react"
import Navbar from "./Navbar"

function PageTemplate({ children }) {
  return (
    <div style={{ flex: 1, flexDirection: "column", zIndex: 0 }}>
      <Navbar />
      <br />
      <div style={{ paddingTop: "94px" }}>{children}</div>
    </div>
  )
}

export default PageTemplate
