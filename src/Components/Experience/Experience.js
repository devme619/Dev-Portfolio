import React, { useState } from "react";
import "./Experience.css";
import ExperienceIsro from "./Isro/ExperienceIsro";
import Pentair from "./Pentair/Pentair";
const Experience = () => {
  const [isroTrigger, setIsroTrigger] = useState(false);
  const [pentairTrigger, setPentairTrigger] = useState(false);
  return (
    <div id="experience" className="experience-page">
      <div className="heading">
        <h2>Experience</h2>
      </div>
      <div className="isro-popup">
        {isroTrigger ? (
          <div>
            <div className="close-isro">
              <button
                onClick={() => {
                  setIsroTrigger(false);
                }}
              >
                Close
              </button>
            </div>
            <h3>INDIAN SPACE REASEARCH ORGANISATION</h3>
            <div>
              <p><b>Position:</b> Scientist/Engineer</p>
              <p>
                <b>Responsibilities:</b> 1. Executing the series of Launch vehicle
                operations, related to the Cryogenic Stage of GSLV, GSLV MkIII
                and PS4 stage of PSLV. 2. Carrying out the preliminary design
                and detailed engineering of ground systems used to handle the
                Cryogenic stage 3. Carrying out inspection, periodic testing,
                qualification, and maintenance of Pneumatic Test Console, Clean
                Room, etc
              </p>
            </div>
          </div>
        ) : (
          ""
        )}
        {pentairTrigger ? (
          <div>
            <div className="close-isro">
              <button
                onClick={() => {
                  setPentairTrigger(false);
                }}
              >
                Close
              </button>
            </div>
            <h3>Pentair Water India Private Limited</h3>
            <div>
              <p><b>Position:</b> Intern</p>
              <p>
                <b>Project Details:</b> The Project aims to practice TPM in the
                organisation and KAIZEN implementation. Three projects were done
                during training period. First project was Winding machine
                mechanism upgradation. Winding machines currently run on Chain
                mechanism. Due to slippage of chains on sprocket, quality of
                winding degrades. To achieve better quality New Timing belt and
                pulley system is designed using Solidworks. In Second project
                Cut-off machine was to be modified to overcome problem of
                toppling and transfer of vessel from one conveyor to another.
                Third project was to incorporate modification in Blower pipes
                orientation to decrease the heat dissipation inside the plant
                and consequently decrease the temperature. Understanding TPM was
                a chore task, it catalyses individual processes to increase the
                productivity of the organisation and its equipment performance.
                TPM is practiced to increase the Overall Equipment Effectiveness
                (OEE) of plant equipment. It addresses the causes for creating
                the correct environment between operators and equipment to
                create ownership.
              </p>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div  className="experience">
        <ExperienceIsro setIsroTrigger={setIsroTrigger} />
        <Pentair  setPentairTrigger={setPentairTrigger}/>
      </div>
    </div>
  );
};

export default Experience;
