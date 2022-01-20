import React from 'react';
import { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from 'react-bootstrap';
import apiEndPoints from './ApiEndpoints';

const SearchComponent = ({ category, setCategory, getUsers, setUsers, getCourses, setSearchKeyword }) => {
  const [search, setSearch] = useState('');
  const [option, setOption] = useState(false);

  const toggle = () => {
    setOption(preVal => {
      setCategory(!preVal ? "tutor" : "course")
      return !preVal
    })
  }
  useEffect(() => {
    if (setSearchKeyword)
      setSearchKeyword(preVal => search)
    if (category === "tutor")
      getUsers(search)
    else
      getCourses(search)
  }, [search])

  return (
    <div id="search" style={{ backgroundColor: '#ffffff' }}>
      <div className='search-input' style={{ width: '60%' }}>
        <button onClick={toggle} className={'toggle-button ' + (option ? 'toggle-close' : '')}>
          {option ? 'Tutor' : 'Course'}
          {/* course=False tutor=True */}
        </button>
        <input placeholder='Search here ...' style={{ fontSize: '1rem' }} onChange={(e) => setSearch(e.target.value)} />
        <div style={{ display: 'grid', alignContent: 'center' }}>
          <i class="bi bi-search" style={{ fontSize: '1.5rem', margin: '5px', paddingRight: '10px', cursor: 'pointer' }} />
        </div>
      </div>
    </div>
  );
};

export default SearchComponent;