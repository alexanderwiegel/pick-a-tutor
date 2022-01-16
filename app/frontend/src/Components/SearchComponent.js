import React from 'react';
import { useState,useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"; 
import { Button } from 'react-bootstrap';
import apiEndPoints from './ApiEndpoints';

const SearchComponent = ({ category, setCategory }) => {
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState('');
    const [option,setOption] = useState(false);
    const getUsers = async (subject = "") => {
        const data = await apiEndPoints.getListofTutors(subject)
        setUsers(preVal => data.data)
      };
    const toggle = () =>{
        setOption(preVal => {
            setCategory(!preVal ? "tutor" : "course" )
            return !preVal
        })
    }
      useEffect(() => {
          getUsers(search)
      }, []);
    return (
        <div id="search" style={{backgroundColor:'#ffffff'}}>
        
            <div className = 'search-input' style={{width:'60%'}}>
            <button onClick={toggle} className={'toggle-button ' + (option ? 'toggle-close':'') }>
            {option ? 'Tutor' : 'Course'} 
            {/* course=False tutor=True */}
        </button>
            <input placeholder = 'Search here ...' style={{fontSize:'1rem'}} onChange= { (e) => setSearch(e.target.value) }/>
            <div onClick={() => getUsers(search)} style={{display:'grid',alignContent:'center'}}>
            <i class="bi bi-search" style={{fontSize:'1.5rem',margin:'5px',paddingRight:'10px', cursor:'pointer'}} />
            </div>
       </div>
       </div>
    );
};

export default SearchComponent;