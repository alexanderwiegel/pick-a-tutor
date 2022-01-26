import React, { useState } from "react"
import { Link } from "react-router-dom"

function Search() {
  const [search, setSearch] = useState("")
  return (
    <div id="search">
      <h3>Try searching for your subject</h3 >
      <div className="search-input" >
        <input placeholder="Search here ..." style={{ fontSize: "1rem" }} onChange={(e) => setSearch(e.target.value)} />
        <Link to={"/browse"} state={{
          search: search
        }} style={{ textDecoration: "none" }}>Search</Link>
      </div>
    </div>
  )
}

export default Search