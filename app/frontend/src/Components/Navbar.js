import React, { useState, useEffect } from "react"
import MenuBar from "./MenuBar"

function Navbar() {
  const [user, setUser] = useState({})

  useEffect(() => {
    { /*
      setInterval was used in order to refresh the page constantly
  in order to have the "logout" button show immediately in place of
  "login", as soon as user logs out.
  */}
    setInterval(() => {
      const userString = localStorage.getItem("user")
      const user = JSON.parse(userString)
      setUser(user)
    }, 5000)
  }, [])

  if (user) {
    const status = localStorage.getItem('statusCode')
    // NavBar for logged in users depending on their status
    return <MenuBar status={status} />
  }
  // NavBar for anonymous users
  else return <MenuBar />
}

export default Navbar