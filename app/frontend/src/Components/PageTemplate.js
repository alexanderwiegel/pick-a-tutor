import React from "react"
import Footer from "./Footer"
import Navbar from "./Navbar"

function PageTemplate({ children }) {
  return (
    <div style={{ flex: 1, flexDirection: "column", zIndex: 0, display: "flex", minHeight: "100vh" }}>
      <Navbar /><br />
      <div style={{ paddingTop: "94px", flex: 1 }}>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default PageTemplate