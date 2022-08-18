import React, { useState } from 'react'
import ExpenseTracker from './ExpenseTracker/ExpenseTracker'
import OMDBApi from './OMDBApi/OMDBApi'
import './Projects.css'
const Projects = () => {
    const [expensetrackeTrigger, setExpensetrackerTrigger] = useState(false)
    const [omdbTrigger, setOmdbTrigger] = useState(false)
  return (
    <div id="projects" className='projects'>
      <div className='project-heading'>
        <h3>Projects</h3>
      </div>
      <div className='expense-tracker-popup'>
        {expensetrackeTrigger?(
            <div>
                <title>Expense Tracker</title>
                <p>Description:</p>
                <p>GitHub Link: <a href='https://github.com/devme619/Expense-Tracker' target='blank'>https://github.com/devme619/Expense-Tracker</a></p>
                <button onClick={()=>(setExpensetrackerTrigger(false))}>Close</button>
            </div>
        ):''}
      </div>
      <div className='omdbapi-popup'>
        {omdbTrigger?(
            <div>
                <title>OMDB-API</title>
                <p>Description:</p>
                <p>GitHub Link: <a href='https://github.com/devme619/OMDB' target='blank'>https://github.com/devme619/OMDB</a></p>
                <button onClick={()=>(setOmdbTrigger(false))}>Close</button>
            </div>
        ):''}
      </div>
      <div className='projects-list'>
        <div className='expense-tracker'>
            <ExpenseTracker setExpensetrackerTrigger={setExpensetrackerTrigger}/>
        </div>
        <div className='omdb-api'>
            <OMDBApi setOmdbTrigger={setOmdbTrigger}/>
        </div>
      </div>
    </div>
  )
}

export default Projects
