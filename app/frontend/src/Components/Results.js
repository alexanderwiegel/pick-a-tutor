import React, { useEffect, useState } from "react";
import apiEndPoints from "./ApiEndpoints";
import { useLocation } from "react-router-dom";
import CardComponentSubject from "./CardComponentSubject";
import CardComponentTutor from "./CardComponentTutor";
import SearchComponent from "./SearchComponent";

function Results(props) {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState("course")
  const location = useLocation();

  const getUsers = async (subject = "") => {
    const data = await apiEndPoints.getListofTutors(subject)
    setUsers(preVal => data.data)
  };

  const _setCategory = (value) => {
    setCategory(preVal => value)
  }

  useEffect(() => {
    setTimeout(() => {
      getUsers(location.state?.search);
      setTimeout(() => {
        setLoading(preVal => false)
      }, 200)
    }, 500)
  }, []);

  return (

    <>
      <SearchComponent getUsers={getUsers} category={category} setCategory={_setCategory} />
      <br />
      <div className="wrapper" style={{ justifyContent: 'space-evenly' }}>
        {
          loading &&
          <h1>Fetching data...</h1>
        }

        {(users.length > 0 && !loading) &&
          users.map(user => {
            if (category === "course")
              return <CardComponentSubject courses={user.Courses}
                name={user.firstName}
                searched_name={location.state?.search} />
            return <CardComponentTutor courses={user.Courses}
              name={user.firstName}
              searched_name={location.state?.search} />
          }
          )
        }
        {
          (users.length === 0 && !loading) &&
          <h1>No data found</h1>
        }
      </div>
    </>
  );
}

export default Results;
