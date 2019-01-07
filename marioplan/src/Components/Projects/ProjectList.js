import React from 'react';
import ProjectSummary from './ProjectSummary';


const ProjecrList = ({projects}) => {
  return (
    <div className = "project-list section">
      {
        projects&&projects.map(project=> {
          return (
            <ProjectSummary projects={project} key={project.id}/>
          )
        })
      }    
    </div>
  )
}
export default ProjecrList;