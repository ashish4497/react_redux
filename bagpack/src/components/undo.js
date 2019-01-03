import React,  { Component, Fragment} from 'react'
import {connect} from 'react-redux';
import { undo, redo} from '../action'

class Undo extends Component {
  render(){
    return (
      <Fragment>
        <div className= "undo-button">
          <button onClick = {() => this.props.dispatch(undo())}>undo</button>
        </div>
        <div className= "redo-button">
          <button onClick = {(event) => this.props.dispatch(redo(event.target.id))}>Redo</button>
        </div>
       
      </Fragment>
    )
  }
}

export default connect() (Undo);