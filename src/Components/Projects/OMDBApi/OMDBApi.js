import React from 'react'
import omdbapi from '../../../Photos/omdbapi.png'
import './OMDBApi.css'
const OMDBApi = () => {
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
          <button className="btn-omdb">Show Details</button>
    </div>
  )
}

export default OMDBApi
