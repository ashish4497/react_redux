import React from 'react';
import moment from 'moment';

const ProjectSummary = ({projects}) => {
  console.log(projects)
  return(
    <div className = "card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className ="card-title">{projects.title}</span>
        <p>Posted by the Net Ninja</p>
        <p className ="grey-text">{moment(projects.createdAt.toDate()).calendar()}</p>
      </div>
    </div>
  )
}
export default ProjectSummary;