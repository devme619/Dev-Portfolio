import React from 'react'
import './Pentair.css'
import pentair from "../../../Photos/pentair.jpg";
const Pentair = (props) => {
  return (
    <div>
      <div className="pentair">
          <h3>Pentair Water India Private Limited</h3>
          <div>
            <img className="pentair-img" src={pentair} alt="pentair" />
          </div>
          <button className="btn-pentair" onClick={()=>{props.setPentairTrigger(true)}}>Show Details</button>
        </div>
    </div>
  )
}

export default Pentair
