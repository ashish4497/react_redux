import React, {Component} from 'react';
import Notifacations from './Notifacation';
import ProjecrList from '../Projects/ProjectList';
import {connect} from 'react-redux'



class Dashboard extends Component {
  render() {
    const {projects} = this.props;
    console.log(projects,"data")
    return (
      <div className= "dashboard container">
        <div className = "row">
          <div className = "col s12 m6">
            <ProjecrList projects={projects}/>
          </div>
          <div className = "col s12 m5 offset-m1">
            <Notifacations />    
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps =(state) =>{
  return {
     projects : state.project.projects 
  }
}

export default connect(mapStateToProps)(Dashboard);