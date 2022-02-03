import React from 'react';
import { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation, useNavigate } from 'react-router';

const SearchComponent = ({ category, setCategory, getUsers, setUsers, getCourses, setSearchKeyword }) => {
  const [search, setSearch] = useState('');
  const [option, setOption] = useState("course");
  const location = useLocation()
  const navigate = useNavigate()

  const toggle = () => {
    if (category === "course") {
      getUsers(search)
    }
    setCategory(category === "tutor" ? "course" : "tutor")
  }
  const searchByKeyword = () => {
    if (location.pathname === "/home") {
      navigate("/browse",
        { state: { search, source: location.pathname, category } }
      )
    } else {
      if (category === "tutor")
        getUsers(search)
      else
        getCourses(search)
    }
  }
  useEffect(() => {
    if (setSearchKeyword)
      setSearchKeyword(() => search)
  }, [search])

  return (
    <div id="search" style={{ backgroundColor: '#ffffff' }}>
      <div className='search-input' style={{ width: '60%' }}>
        <button onClick={toggle} className={'toggle-button ' + (category === "tutor" ? 'toggle-close' : '')}>
          {category === "tutor" ? 'Tutor' : 'Course'}
          {/* course=False tutor=True */}
        </button>
        <input type="text" maxLength='40' placeholder='Search here ...' style={{ fontSize: '1rem' }} defaultValue={location.state?.search} onChange={(e) => setSearch(e.target.value)} />
        <div onClick={searchByKeyword} style={{ display: 'grid', alignContent: 'center' }}>
          <i className="bi bi-search" style={{ fontSize: '1.5rem', margin: '5px', paddingRight: '10px', cursor: 'pointer' }} />
        </div>
      </div>
    </div>
  )
}

export default SearchComponent