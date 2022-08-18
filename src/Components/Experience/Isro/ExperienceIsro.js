import React, { useState } from "react";
import "./ExperienceIsro.css";
import isro from "../../../Photos/isro.jpg";
const ExperienceIsro = (props) => {
  
  return (
    <div>
      <div className="isro">
        <h3>INDIAN SPACE REASEARCH ORGANISATION</h3>
        <div>
          <img className="isro-img" src={isro} alt="isro" />
        </div>
        <button className="btn-isro" onClick={()=>{props.setIsroTrigger(true)}}>Show Details</button>
      </div>
    </div>
  );
};

export default ExperienceIsro;
