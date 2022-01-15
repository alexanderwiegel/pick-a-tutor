import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Search () {
    const [search, setSearch] = useState('');
    const [star, setStar] = useState(0);
   return(
   <div id= 'search'>
       <h3>Try searching for your subject</h3 >
       <div className = 'search-input' >
            <input placeholder = 'Search here ...' style={{fontSize:'1rem'}} onChange= { (e) => setSearch(e.target.value) }/>
            
            {/* <select name="pets" onChange={ (e) => setStar(e.target.value)}>
                <option value="0">Based on given Stars</option>
                <option value="one">1 Star Rating</option>
                <option value="two">2 Star Rating</option>
                <option value="three">3 Star Rating</option>
                <option value="four">4 Star Rating</option>
                <option value="five">5 Star Rating</option>
            </select> */}
            {/* <a href = './Detail' > Search </a> */}
            <Link to={'/browse' } state={{
                // star : star, 
                search : search
            }} style={{textDecoration:'none'}}>Search</Link>
       </div>
    </div>
    )
}

export default Search;