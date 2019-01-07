import React from 'react';

const ProjectSummary = ({projects}) => {
  return(
    <div className = "card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className ="card-title">{projects.title}</span>
        <p>Posted by the Net Ninja</p>
        <p className ="grey-text"> 1st jan  , 2019</p>
      </div>
    </div>
  )
}
export default ProjectSummary;