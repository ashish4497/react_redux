import React from 'react';
import ProjectSummary from './ProjectSummary';
import {Link} from 'react-router-dom';

const ProjecrList = ({projects}) => {
  return (
    <div className = "project-list section">
      {
        projects&&projects.map(project=> {
          return (
            <Link to ={"/project/" + project.id} key={project.id} >
              <ProjectSummary projects={project} key={project.id}/>
            </Link>
          )
        })
      }    
    </div>
  )
}
export default ProjecrList;