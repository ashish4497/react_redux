import React from 'react';

const ProjectDetail = (props) => {
  const id = props.match.params.id; 
  return (
    <div className ="container section project-details">
      <div className= "card z-depth-0">
        <div className="card-content">
          <span className="card-title"> Project Title -{id}</span>
          <p>Loream is the best to copy and past the content</p>
        </div>
        <div className="card-action gret lighten-3 grey-text">
          <div>posted by the net ninja</div>
          <div>1 jan, 3pm</div>
        </div>
      </div>
    </div>
  )
}
export default ProjectDetail;