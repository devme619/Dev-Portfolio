import React from 'react'
import omdbapi from '../../../Photos/omdbapi.png'
import './OMDBApi.css'
const OMDBApi = (props) => {
  return (
    <div>
       <h3>OMDB-API</h3>
          <div>
            <img
              className="omdbapi-img"
              src={omdbapi}
              alt="omdbapi"
            />
          </div>
          <button className="btn-omdb" onClick={()=>{props.setOmdbTrigger(true)}}>Show Details</button>
    </div>
  )
}

export default OMDBApi
