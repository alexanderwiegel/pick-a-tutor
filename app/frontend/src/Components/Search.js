import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';

function Search() {
  const [search, setSearch] = useState('');
  const location = useLocation()
  return (
    <div id="search">
      <h3>Try searching for your subject</h3 >
      <div className='search-input' >
        <input maxLength='40' placeholder='Search here ...' style={{ fontSize: '1rem' }} onChange={(e) => setSearch(e.target.value)} />
        <Link to={'/browse'} state={{
          search: search,
          source: location.pathname
        }} style={{ textDecoration: 'none' }}>Search</Link>
      </div>
    </div>
  )
}

export default Search