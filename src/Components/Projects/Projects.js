import React from 'react'
import ExpenseTracker from './ExpenseTracker/ExpenseTracker'
import OMDBApi from './OMDBApi/OMDBApi'
import './Projects.css'
const Projects = () => {
  return (
    <div id="projects" className='projects'>
      <div className='project-heading'>
        <h3>Projects</h3>
      </div>
      <div className='projects-list'>
        <div className='expense-tracker'>
            <ExpenseTracker/>
        </div>
        <div className='omdb-api'>
            <OMDBApi/>
        </div>
      </div>
    </div>
  )
}

export default Projects
